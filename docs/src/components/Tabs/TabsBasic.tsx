import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

interface TabsBasicProps {
  Tab1Label: string;
  Tab1Content: string;
  Tab2Label: string;
  Tab2Content: string;
  Tab3Label: string;
  Tab3Content: string;
}

export const TabsBasic: React.FC<TabsBasicProps> = ({
  Tab1Label,
  Tab1Content,
  Tab2Label,
  Tab2Content,
  Tab3Label,
  Tab3Content,
}) => {
  return (
    <Tabs defaultValue="Tab1Content">
      <TabItem label={Tab1Label} value="Tab1Content">
        <CodeBlock language="bash">{Tab1Content}</CodeBlock>
      </TabItem>
      <TabItem label={Tab2Label} value="Tab2Content">
        <CodeBlock language="bash">{Tab2Content}</CodeBlock>
      </TabItem>
      <TabItem label={Tab3Label} value="Tab3Content">
        <CodeBlock language="bash">{Tab3Content}</CodeBlock>
      </TabItem>
    </Tabs>
  );
};
