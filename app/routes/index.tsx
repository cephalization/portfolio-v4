import { ExternalAnchor } from "~/components/anchor";
import { Block } from "~/components/block";
import { Table } from "~/components/table";
import { jobs } from "~/jobs";

export default function Index() {
  return (
    <main
      className="
        motion-reduce:transition-none transition-[padding]
        p-12 pt-12 lg:pl-24 lg:pt-32 
        max-w-3xl 
        text-blue-200
        text-sm
        flex-1
      "
    >
      <Block main header="Anthony Powell">
        <h4 className="text-md font-medium">
          Software engineer, frontend passionate.
        </h4>
        <p className="mt-6">
          Currently at{" "}
          <ExternalAnchor
            preload="true"
            href="https://www.netscout.com/arbor-ddos"
          >
            Netscout
          </ExternalAnchor>
          , building friendlier interfaces.
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
        <p className="mt-2">Making music at Home.</p>
      </Block>
      <Block header="Resume">
        <Table rows={jobs} />
      </Block>
      <Block>
        <ul className="flex gap-2 text-xs">
          <li className="mt-1">
            <ExternalAnchor
              preload="true"
              href="https://toot.cafe/@cephalization"
            >
              Mastodon
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
