"use client";

import { useState } from "react";

type State = { status: "idle" | "sending" | "sent" | "error"; error?: string };

export function ContactForm() {
  const [state, setState] = useState<State>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state.status === "sending") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState({ status: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setState({ status: "error", error: json.error || "Could not send. Please try again." });
        return;
      }
      setState({ status: "sent" });
      form.reset();
    } catch {
      setState({ status: "error", error: "Network error. Please try again." });
    }
  }

  if (state.status === "sent") {
    return (
      <div className="border-2 border-[var(--color-ink)] bg-[var(--color-surface)] p-6">
        <p className="ticker mb-2">Message received</p>
        <p className="text-[var(--color-ink)] font-medium">Thanks. We&rsquo;ll get back to you at the email you provided.</p>
        <button
          type="button"
          onClick={() => setState({ status: "idle" })}
          className="mt-4 text-[13px] text-[var(--color-ink-dim)] underline underline-offset-4 decoration-[var(--color-rule-strong)] hover:text-[var(--color-ink)] hover:decoration-[var(--color-ink)] transition-colors"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <Field label="Name" name="name" type="text" autoComplete="name" required />
      <Field label="Email" name="email" type="email" autoComplete="email" required />
      <Field label="Message" name="message" textarea required />
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <div className="flex items-center gap-4 flex-wrap mt-2">
        <button
          type="submit"
          disabled={state.status === "sending"}
          className="inline-flex items-center h-11 px-5 bg-[var(--color-accent)] text-white font-semibold text-[14px] tracking-tight hover:bg-[var(--color-accent-deep)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state.status === "sending" ? "Sending…" : "Send message →"}
        </button>
        {state.status === "error" && (
          <p className="text-[13px] text-[var(--color-accent)]">{state.error}</p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  autoComplete?: string;
}) {
  const common =
    "w-full bg-[var(--color-surface)] border border-[var(--color-rule)] px-3.5 py-2.5 text-[15px] text-[var(--color-ink)] placeholder-[var(--color-ink-mute)] focus:outline-none focus:border-[var(--color-ink)] transition-colors";
  return (
    <label className="block">
      <span className="ticker block mb-1.5">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={common} />
      ) : (
        <input name={name} type={type} required={required} autoComplete={autoComplete} className={common} />
      )}
    </label>
  );
}
