import { ExternalAnchor } from "~/components/anchor";
import { Reader } from "~/components/reader";

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
      <section className="relative">
        <Reader />
        <h1 className="text-2xl font-bold">Anthony Powell</h1>
        <h4 className="text-md font-medium">Software engineer, passionate.</h4>
      </section>
      <section className="relative mt-10">
        <Reader />
        <p>
          I am building interfaces and crunching data at{" "}
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
      <section className="font-bold relative">
        <Reader />
        Thanks 👋
      </section>
    </main>
  );
}
