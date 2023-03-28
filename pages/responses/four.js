export default function Four() {
    return <div>
        <ul>
            <li>
                EdgeFunctions: Edge Functions are useful when you need to interact with data over the network as fast as possible, such as executing OAuth callbacks, responding to webhook requests, or interacting with an API that fails if a request is not completed within a short time limit.
            </li>
            <li>
                ServerlessFunctions: Serverless Functions enable developers to write functions in JavaScript and other languages to handle user authentication, form submissions, database queries, custom Slack commands, and more.
            </li>
            <li>
                EdgeMiddleware: Edge Middleware is code that executes before a request is processed on a site. Based on the request, you can modify the response. Because it runs before the cache, using Middleware is an effective way of providing personalization to statically generated content. Depending on the incoming request, you can execute custom logic, rewrite, redirect, add headers and more, before returning a response.
            </li>
        </ul>
    </div>
  }