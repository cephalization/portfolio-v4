import { ExternalAnchor } from "~/components/anchor";

export default function Index() {
  return (
    <main
      className="
        motion-reduce:transition-none transition-[padding]
        p-12 pt-12 lg:pl-24 lg:pt-32 
        mx-auto max-w-3xl 
        text-blue-200
        text-sm
        flex-1
      "
    >
      <section>
        <h1 className="text-2xl font-bold">Anthony Powell</h1>
        <h4 className="text-md font-medium">Software engineer, passionate.</h4>
      </section>
      <section className="mt-10">
        <p>
          Building interfaces and crunching data, at{" "}
          <ExternalAnchor
            preload="true"
            href="https://www.netscout.com/arbor-ddos"
          >
            Netscout
          </ExternalAnchor>
          .
        </p>
      </section>
      <div className="h-40 w-full" />
      <section className="font-bold">Thanks 👋</section>
    </main>
  );
}
