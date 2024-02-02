import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import React from "react";

type TopicItem = {
  title: string;
  path: string;
  image: string;
};

const topicList: TopicItem[] = [
  {
    title: "Text",
    path: "/docs/getting-started/text",
    image:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG40N2cxOWg2cXNrMWx2NHlwdGF0bzg2ejF6Mjc2dmpnZHgzczRodyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/R3IxJW14a3QNa/giphy.gif",
  },
  {
    title: "Heading",
    path: "/docs/getting-started/heading",
    image:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTh5aHZjcWY2OXF6NnZvaG0zandra2ZkNDI1bG9zb2h2NWQ5a3UydiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bAftZ12SC0uEjLndIh/giphy.gif",
  },
  {
    title: "Image",
    path: "/docs/getting-started/image",
    image:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGUwaTJicHJjbHVvb2p0bzNoZnN3aXpwN3BtbXN5d3VsanV6NTJ5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8PpFJcG4y8HqsxQumz/giphy.gif",
  },

  {
    title: "Link",
    path: "/docs/getting-started/image",
    image:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWFwYzNzcm5zMHRrYmd4NHRkc2MycHd5d3h4a2VyOWVlaHpjbDFxMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UaqqArAD8OLQgOpfxY/giphy.gif",
  },
  {
    title: "Button",
    path: "/docs/Topics/React/",
    image:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3RzeXM0YmQ0MGl2d2V0cXRuN3d4YTd1YnpzZHFsZHI3MW5reDJveiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ehOWm8vxKMcZeEvveE/giphy.gif",
  },
  {
    title: "AI",
    path: "/docs/Topics/AI",
    image:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3U0OTBma2FxeTlycGV2dWttMGx2YW5manB1Y3M0bDlrdW1yeW10ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IZY2SE2JmPgFG/giphy.gif",
  },
];

function Topic({ title, image, path }: TopicItem) {
  return (
    <Link href={path} className={clsx("col col--3")}>
      <div className={`feature-padding`}>
        <div className="text--center">
          <img className="topic-image" src={image} />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
        </div>
      </div>
    </Link>
  );
}

export default function TopicList(): JSX.Element {
  return (
    <section className={styles.featuresTopics}>
      <div className="container ">
        <div className="row">
          {topicList.map((props, idx) => (
            <Topic key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
