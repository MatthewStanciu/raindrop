import { Octokit } from '@octokit/rest'

const octokit = new Octokit({
  auth: process.env.GH_ACCESS_TOKEN
})

const isInOrg = async (email: string | null | undefined): Promise<boolean> => {
  if (!email) {
    console.log('no email')
    return false
  }
  let members = await octokit.rest.orgs.listMembers({
    org: 'purduehackers',
    per_page: 100
  })
  const member = members.data.filter((acc) => acc.email === email)
  console.log(member !== null)
  return member !== null
}

export default isInOrg
