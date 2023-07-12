import ContactCard from "../components/ContactCard"
import ContactForm from "../components/ContactForm"

const contact = () => {
  return (
    <>
      <div className="">
        <ContactCard />
       <div className="my-10">
       <ContactForm  />
       </div>
      </div>
    </>
  )
}

export default contact