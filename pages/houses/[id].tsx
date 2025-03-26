
export default function House({ house }) {
    return (
      <div>
        {house.title}
      </div>
    );
  }
  
  export async function getServerSideProps({ params }) {
    const response = await fetch(`http://localhost:4000/houses/${params.id}`)
    const house = await response.json()
  return {
    props: {house},
  }
}