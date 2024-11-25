// import Image from 'next/image'

import Link from "next/link";
import "../app/style.css"
const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicistt',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];
export default function Home() {

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> Welcome to Home Page!
        <Link href="/dashboard"> Go to Dashboard</Link>
      </h1>
      {people.map(item => (
        <>
          <div className="box"  >
            <div key={item.id}>
              <div>{item.id}</div>
              <div>{item.name}</div>
              <div>{item.profession}</div>
            </div>
          </div>
        </>
      ))}
    </main>
  )
}
