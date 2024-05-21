import Heading from "../../components/heading/Heading";
import Contact from "../contact/Contact";
import ContactImage from "../contact/ContactImage";
import ContactContent from "../contact/ContactContent";
import ContactHeading from "../contact/ContactHeading";
import ContactDescription from "../contact/ContactDescription";
import ContactInfo from "../contact/ContactInfo";
import ContactMedia from "../contact/ContactMedia";

const HomeContact = () => {
    return (
        <div className="container">
            <Heading className="text-center">Contact Us</Heading>
            <Contact>
                <ContactImage url="https://webstatic.hoyoverse.com/upload/op-public/2022/07/18/1008bf21a40855cee350afb2904224fb_4199329675721892766.jpg"></ContactImage>
                <ContactContent>
                    <ContactHeading>Welcome to our office</ContactHeading>
                    <ContactDescription>
                        We are honored to have you here. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quia porro mollitia
                        quisquam corrupti. Culpa dignissimos explicabo esse
                        cumque nam consectetur nesciunt voluptatibus, nihil odit
                        aspernatur obcaecati, recusandae delectus dolor nisi.
                    </ContactDescription>
                    <ContactInfo
                        title="Time"
                        description="Monday - Friday: 9:00am - 5:00pm"
                    ></ContactInfo>
                    <ContactInfo
                        title="Address"
                        description="3F, 12th Floor, No. 1, 5th Road, 6th Avenue, New
                            York City"
                    ></ContactInfo>
                </ContactContent>
            </Contact>

            <div className="grid grid-cols-2 gap-x-10 items-center mt-10">
                <div className="flex flex-col gap-y-3">
                    <ContactHeading>Our social media</ContactHeading>
                    <ContactDescription>
                        You can find us on these social media. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Quia porro
                        mollitia quisquam corrupti. Culpa dignissimos explicabo
                        esse cumque nam consectetur nesciunt voluptatibus, nihil
                        odit aspernatur obcaecati, recusandae delectus dolor
                        nisi.
                    </ContactDescription>
                    <ul className="flex items-center justify-between px-5 mt-10">
                        <li>
                            <ContactMedia
                                url="https://www.facebook.com/HonkaiStarRail.VN"
                                imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                                mediaName="Facebook"
                            ></ContactMedia>
                        </li>
                        <li>
                            <ContactMedia
                                url="https://www.instagram.com/honkaistarrail/"
                                imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                                mediaName="Instagram"
                            ></ContactMedia>
                        </li>
                        <li>
                            <ContactMedia
                                url="https://www.tiktok.com/discover/Honkai-Star-Rail-Official?lang=en"
                                imgUrl="https://seeklogo.com/images/T/tiktok-share-icon-black-logo-29FFD062A0-seeklogo.com.png"
                                mediaName="Tiktok"
                            ></ContactMedia>
                        </li>
                        <li>
                            <ContactMedia
                                url="https://www.youtube.com/@HonkaiStarRail"
                                imgUrl="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"
                                mediaName="Youtube"
                            ></ContactMedia>
                        </li>
                    </ul>
                </div>
                <ContactImage url="https://fastcdn.hoyoverse.com/content-v2/plat/114197/791bcad7a225278c85044f3a3e5f905a_6494628331378143837.jpg"></ContactImage>
            </div>
        </div>
    );
};

export default HomeContact;
