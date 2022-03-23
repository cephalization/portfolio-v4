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
          I am building interfaces at{" "}
          <ExternalAnchor
            preload="true"
            href="https://www.netscout.com/arbor-ddos"
          >
            Netscout
          </ExternalAnchor>
          .
        </p>
        <p className="mt-2">
          Hacking on projects on{" "}
          <ExternalAnchor
            preload="true"
            href="https://www.github.com/cephalization"
          >
            Github
          </ExternalAnchor>
          .
        </p>
        <p className="mt-2">Making music at Home.</p>
      </section>
      <section className="relative mt-4 pb-6 pr-4">
        <Reader />
        <h4 className="text-md font-medium">Contact me</h4>
        <ul>
          <li className="pl-2 mt-1">
            <ExternalAnchor
              preload="true"
              href="https://twitter.com/Cephalization"
            >
              Twitter
            </ExternalAnchor>
          </li>
          <li className="pl-2 mt-1">
            <ExternalAnchor
              preload="true"
              href="https://www.linkedin.com/in/anthony-powell-05788696/"
            >
              LinkedIn
            </ExternalAnchor>
          </li>
        </ul>
      </section>
    </main>
  );
}
