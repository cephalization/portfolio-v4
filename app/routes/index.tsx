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
      <section className="relative pb-6 pr-4">
        <Reader />
        <h1 className="text-2xl font-bold">Anthony Powell</h1>
        <h4 className="text-md font-medium">Software engineer, passionate.</h4>
        <p className="mt-6">
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
      <section className="relative mt-4 pb-6 pr-4">
        <Reader />
        <h2 className="text-2xl font-bold">Projects</h2>
        <h4 className="text-md font-medium">Open source I've authored.</h4>
        <div className="mt-6">
          <ExternalAnchor
            preload="true"
            href="https://www.github.com/cephalization/megawave"
          >
            Megawave
          </ExternalAnchor>
          .{" "}
          <span className="whitespace-pre-line">
            Self hosted music streaming platform.
          </span>
          <ul className="flex flex-wrap gap-4 list-disc list-inside pt-4 ml-4">
            <li>React.js</li>
            <li>Tailwind.css</li>
            <li>Python 3 + Fast API</li>
            <li>Docker</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
