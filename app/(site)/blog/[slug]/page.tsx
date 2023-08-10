export default async function Post({ params }: { params: { slug: string } }) {
  return <p>Post: {params.slug}</p>
}
