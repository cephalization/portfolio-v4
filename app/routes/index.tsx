import { ExternalAnchor } from "~/components/anchor";
import { Block } from "~/components/block";
import { Table } from "~/components/table";
import { jobs } from "~/jobs";

export default function Index() {
  return (
    <main
      className="
        motion-reduce:transition-none transition-[padding]
        p-12 pl-4 pr-0 pt-6 sm:pl-24 sm:pt-32 
        max-w-3xl 
        text-blue-200
        text-sm
        flex-1
      "
    >
      <Block main header="Anthony Powell">
        <h4 className="text-md font-medium text-cyan-200">
          Senior Software engineer, frontend passionate.
        </h4>
        <p className="mt-6">
          Currently at{" "}
          <ExternalAnchor preload="true" href="https://furl.ai">
            furl ai
          </ExternalAnchor>
          , bridging LLMs with pleasant user experiences.
        </p>
        <p className="mt-2">
          Hacking on projects with{" "}
          <ExternalAnchor
            preload="true"
            href="https://www.github.com/cephalization"
          >
            Github
          </ExternalAnchor>
          .
        </p>
        <p className="mt-2">Making music, and music applications.</p>
      </Block>
      <Block header="Résumé">
        <Table rows={jobs} />
      </Block>
      <Block>
        <ul className="flex gap-2 text-xs">
          <li className="mt-1">
            <ExternalAnchor
              preload="true"
              href="https://threads.net/@cephalization"
            >
              Threads
            </ExternalAnchor>
          </li>
          <li className="mt-1">
            <ExternalAnchor
              preload="true"
              href="https://twitter.com/Cephalization"
            >
              Twitter
            </ExternalAnchor>
          </li>
          <li className="mt-1">
            <ExternalAnchor
              preload="true"
              href="https://www.linkedin.com/in/anthony-powell-05788696/"
            >
              LinkedIn
            </ExternalAnchor>
          </li>
        </ul>
      </Block>
    </main>
  );
}
