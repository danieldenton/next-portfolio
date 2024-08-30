import Image from "next/image";
import Github from "./github";
import GooglePlay from "./google-play";
import AppStore from "./app-store";
import painNavImg from "../../../public/assets/PainNav.jpeg";
import painNavImg2 from "../../../public/assets/PainNav2.jpeg";
import painNavImg3 from "../../../public/assets/PainNav3.jpeg";

const painNavigator = {
  name: "PainNavigator",
  iOSLink: "https://apps.apple.com/us/app/painnavigator/id1631767340",
  googlePlayLink:
    "https://play.google.com/store/apps/details?id=com.PainNavigator&hl=en_US",
  mobileAppGithub: "https://github.com/danieldenton/painnavigator-mobile",
  serverGithub: "https://github.com/danieldenton/painnavigator-api",
  createdWith: "React Native, Expo, Ruby on Rails, PostgreSQL, Heroku",
  description:
    "PainNavigator is a physical therapy app for people dealing with chronic pain. It leverages the Cloudinary platform for hosting the videos which it streams. The app also tracks a users progress with their pain management with Daily Pain Scores, SMART Goals and Pain Journals. The app also provides access to a wellness coach for in app support.",
  description2:
    "If you would like to check out the app please contact me at danielmdenton@gmail.com for a login email and password.",
};

export default function PainNavigator() {
  return (
    <div className="px-10 py-8 mx-10">
      <h2 className="flex justify-center text-xl mb-1">{painNavigator.name}</h2>
      <p className="flex justify-center text-center text-lg mb-2">
        {painNavigator.createdWith}
      </p>
      <p className="flex justify-center text-center sm:px-10 mb-3">
        {painNavigator.description}
      </p>
      <p className="flex justify-center text-center mb-3">
        {painNavigator.description2}
      </p>
      <div className="flex sm:flex-row flex-col justify-center mt-7">
        <div className="flex sm:flex-row flex-col sm:justify-around justify-center sm:w-3/4 w-full">
          <Image
            className="flex justify-center rounded m-1"
            src={painNavImg2}
            alt="PainNavigator"
            height={487.25}
            width={225}
          />
          <Image
            className="rounded m-1"
            src={painNavImg}
            alt="PainNavigator"
            height={487.25}
            width={225}
          />
          <Image
            className="rounded m-1"
            src={painNavImg3}
            alt="PainNavigator"
            height={487.25}
            width={225}
          />
        </div>
        <div className="flex flex-col sm:w-1/4 w-full mt-10">
          <div className="flex flex-col justify-center">
            <p className="text-center my-4 mx-1">Mobile App Repository</p>
            <div className="flex justify-center">
              <Github githubLink={painNavigator.mobileAppGithub} />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-center my-4">Server Repository</p>
            <div className="flex justify-center">
              <Github githubLink={painNavigator.serverGithub} />
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <AppStore appStoreLink={painNavigator.iOSLink} />
          </div>
          <div className="flex justify-center mt-5">
            <GooglePlay googlePlayLink={painNavigator.googlePlayLink} />
          </div>
        </div>
      </div>
    </div>
  );
}
