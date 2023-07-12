import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
import Link from "next/link";
const ContactCard = () => {
  return (
    <>
      <div  className="grid grid-cols-3 gap-5" >
                    <div>
                        <i> <MdEmail /> </i>
                        <h2>Email</h2>
                        <p>Monday to Friday Expected </p>
                        <p >response time: 72 hours </p>
                        <Link href="/">  Send Email <span>-&gt;</span></Link>
                    </div>

                    <div >
                        <i> <MdVoiceChat /> </i>
                        <h2>Live Chat</h2>
                        <p>Weekdays: 9 AM — 6 PM ET</p>
                        <p >Weekends: 9 AM — 5 PM ET </p>
                        <Link href="/" >  Chat Now <span>-&gt;</span></Link>
                    </div>

                    <div >
                        <i> <MdForum /> </i>
                        <h2>Community Forum</h2>
                        <p>Monday to Friday Expected </p>
                        <p >response time: 72 hours </p>
                        <Link href="/" >  Ask The Community <span>-&gt;</span></Link>
                    </div>

                </div>
    </>
  )
}

export default ContactCard