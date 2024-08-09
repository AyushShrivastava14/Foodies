import ViewNavbar from "../UsersTypes/View/ViewNavbar";

export default function NotFound() {
  return (
    <>
        <ViewNavbar />
        <section style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '620px'}}>
            <span style={{color: 'orange', fontSize: '2rem', fontWeight: 'bold'}}>
                Not Accessible
            </span>
        </section>
    </>
  )
}
