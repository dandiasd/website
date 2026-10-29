"use client";

import { useRef, useState, useSyncExternalStore } from "react";

const noop = () => () => {};

export default function CallbackCode() {
  const search = useSyncExternalStore(noop, () => window.location.search, () => null);
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  if (search === null) return null;

  const params = new URLSearchParams(search);
  // Meta appends "#_" to the redirect; it lives in the hash, so the code itself is clean.
  const code = params.get("code");
  const error = params.get("error");

  if (error || !code) {
    return (
      <div role="alert">
        <h1 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900">
          Threads connection failed
        </h1>
        <p className="mt-3 text-lg text-slate-500">
          {params.get("error_description") ??
            (error ? "Threads did not authorize the app." : "No authorization code was found in this URL.")}
        </p>
        {error && <p className="mt-2 text-sm text-slate-400">Error: {error}</p>}
        <p className="mt-6 text-slate-600">
          Run <code className="font-mono">crm token connect</code> again to retry.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900">
        Threads connected
      </h1>
      <p className="mt-3 text-lg text-slate-500">
        Copy the code below (or the whole URL) and paste it into{" "}
        <code className="font-mono text-slate-900">crm token connect</code>.
      </p>
      <div className="mt-8 flex items-stretch gap-3">
        <code ref={codeRef} className="flex-1 min-w-0 break-all font-mono text-sm bg-white border border-slate-200 rounded-2xl p-4 text-slate-900 select-all">
          {code}
        </code>
        <button
          type="button"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(code);
              setCopied(true);
            } catch {
              // Clipboard can be blocked; select the code so it can be copied by hand.
              if (codeRef.current) window.getSelection()?.selectAllChildren(codeRef.current);
            }
          }}
          className="shrink-0 bg-amber-500 text-slate-900 px-6 rounded-2xl font-semibold hover:bg-amber-400 transition-all duration-200"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <p className="mt-4 text-sm text-slate-400">
        This code is only shown here. It is not stored or sent anywhere by this page.
      </p>
    </div>
  );
}
