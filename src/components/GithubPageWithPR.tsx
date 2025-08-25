import { useState } from "react";
import GitHubPage from "./GitHubPage";
import GitHubPR from "./GitHubPR";

interface GithubPageWithPRProps {
  repository: string;
  filePath: string;
  branch?: string;
  pullRequestNumber: number;
  focusFile: string;
}

export default function GithubPageWithPR({ repository, filePath, branch, pullRequestNumber, focusFile }: GithubPageWithPRProps) {

  const [activeTab, setActiveTab] = useState<"ide" | "diff">("ide");

  return (
    <div className="p-0">
      {activeTab === "ide" ? (
        <div>
          <GitHubPage
            repository={repository}
            filePath={filePath}
            branch={branch}
            className="m-0"
          />
        </div>
      ) : (
        <div>
          <GitHubPR
            repository={repository}
            pullRequestNumber={pullRequestNumber}
            focusFile={focusFile}
            className="m-0"
          />
        </div>
      )}
    </div>
  );
}