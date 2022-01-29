//This will be landing page for hosts
import Header from "../../components/header"
import Link from "next/link"

export default function Hosts() {
  
    return (
        <div>
            <Header />
            <p className="wannaHost">Do you love Purr babies? Do you have cuddles to give? Do you have space to provide? You do?! Become a Host with a Purrfect Getaway. Sign up and not only will you get your fill of purrs and cuddles, you will allow a purr baby to travel with their parent in an area where they can still visit. You provide them with the comfort of knowing their purr baby is warm, safe and happy!</p>

            <Link href="/hosts/sign-up"><button className="hostSignup" >Sign Up</button></Link>
        </div>
    )
}