module.exports = {
  'strapi-plugin-deploy-dashboard': {
    enabled: true,
    config: {
      deployments: [
        {
          name: "Feedback Website",
          instances: [
            {
              id: "production",
              name: "Production",
              hookUrl: "https://api.github.com/repos/Zwork101/feedback-template/actions/workflows/aws.yml/dispatches",
              requestOptions: {
                method: "POST",
                headers: {
                  "Accept": "application/vnd.github+json",
                  "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
                  "X-GitHub-Api-Version": "2022-11-28"
                },
                body: {
                  ref: "main"
                }
              }
            }
          ]
        }
      ]
    }
  }
 };
