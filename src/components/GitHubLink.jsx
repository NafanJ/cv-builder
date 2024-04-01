function GitHubLink({ githubUsername }) {
    const baseURL = "https://github.com/";
    return (
      <a href={`${baseURL}${githubUsername}`}>
        <span>{githubUsername}</span>
      </a>
    );
  }

  export default GitHubLink;