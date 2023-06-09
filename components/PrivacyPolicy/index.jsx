import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import DesktopNav from '../Navbars/DesktopNav'
import MobileNav from '../Navbars/MobileNav'
import Link from 'next/link'
const PrivacyPolicy = () => {
  return (
    <ContainerLayout>
      <DesktopNav />
      <MobileNav />
      <div className="w-full mt-24 flex lg:flex-row flex-col mb-6 md:mb-24 ">
        <p className="text-lg semi-bold block md:hidden mb-2">Legal</p>

        <div className="w-full lg:w-3/12 flex md:flex-col space-x-2 md:space-x-0  md:space-y-6 mb-4 md:mb-0">
          <p className="text-lg semi-bold hidden md:flex">Legal</p>
          <p className="text-md text-blue">Privacy Policy</p>
          <p className="text-md ">Terms of Service</p>
          <p className="text-md ">Security</p>
        </div>
        <div className="w-full lg:w-7/12">
          <h1 className="text-bold text-4xl text-blackD dark:text-white sora font-bold">
            Privacy Policy
          </h1>
          <p className="text-base text-blackE dark:text-white mt-6">
            Last updated: February 26, 2021
          </p>
          <p className="text-base text-blackE dark:text-white mt-6">
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You. We use Your Personal data to provide and improve the
            Service. By using the Service, You agree to the collection and use
            of information in accordance with this Privacy Policy. This Privacy
            Policy has been created with the help of the{" "}
            <span className="underline">Privacy Policy Generator. </span>
          </p>
          <p className="text-base text-blackE dark:text-white mt-6 font-bold">
            {" "}
            Interpretation and Definitions
          </p>
          <p className="text-base text-blackE dark:text-white mt-6 font-bold">Interpretation</p>
          <p className="text-base text-blackE dark:text-white">
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>
          <p className="text-base text-blackE dark:text-white font-bold mt-6">Definitions </p>
          <p className="text-base text-blackE dark:text-white">
            For the purposes of this Privacy Policy:
          </p>
          <ul className="list-disc">
            <li className="text-base text-blackE dark:text-white">
              <span className="font-bold mr-1"> Affiliate</span>
              means an entity that controls, is controlled by or is under common
              control with a party, where "control" means ownership of 50% or
              more of the shares, equity interest or other securities entitled
              to vote for election of directors or other managing authority.
            </li>
            <li className="text-base text-blackE dark:text-white">
              <span className="font-bold mr-1 "> Application</span>
              means the software program provided by the Company downloaded by
              You on any electronic device, named Versuspay
            </li>
            <li className="text-base text-blackE dark:text-white">
              <span className="font-bold mr-1">Company</span>
              (referred to as either "the Company", "We", "Us" or "Our" in this
              Agreement) refers to Softdroom LTD, Covent Garden, 71-75 Shelton
              Street.
            </li>
            <li className="text-base text-blackE dark:text-white">
              <span className="font-bold mr-1">Country</span>
              Country refers to: United Kingdom
            </li>
            <li className="text-base text-blackE dark:text-white">
              <span className="font-bold mr-1">Device</span>
              means any device that can access the Service such as a computer, a
              cellphone or a digital tablet.
            </li>
            <li className="text-base text-blackE dark:text-white">
              <span className="font-bold mr-1">Personal</span>
              Data is any information that relates to an identified or
              identifiable individual.
            </li>
            <li className="text-base text-blackE dark:text-white">
              <span className="font-bold mr-1">Service</span>
              refers to the Application
            </li>
            <li className="text-base text-blackE dark:text-white">
              <span className="font-bold mr-1"> Service Provider</span>
              means any natural or legal person who processes the data on behalf
              of the Company. It refers to third-party companies or individuals
              employed by the Company to facilitate the Service, to provide the
              Service on behalf of the Company, to perform services related to
              the Service or to assist the Company in analyzing how the Service
              is used.
            </li>
            <li className="text-base text-blackE dark:text-white">
              <span className="font-bold mr-1">
                Third-party Social Media Service
              </span>
              refers to any website or any social network website through which
              a User can log in or create an account to use the Service. Usage
              Data refers to data collected automatically, either generated by
              the use of the Service or from the Service infrastructure itself
              (for example, the duration of a page visit).
            </li>
            <li className="text-base text-blackE dark:text-white">
              <span className="font-bold mr-1">You</span>
              means the individual accessing or using the Service, or the
              company, or other legal entity on behalf of which such individual
              is accessing or using the Service, as applicable.
            </li>
          </ul>
          <p className="text-base text-blackE dark:text-white mt-6 font-bold">
            {" "}
            Collecting and Using Your Personal Data
          </p>
          <p className="text-base text-blackE dark:text-white mt-6 font-bold">
            {" "}
            Types of Data Collected
          </p>
          <p className="text-base text-blackE dark:text-white font-bold mt-6">Personal Data</p>
          <p className="text-base text-blackE dark:text-white">
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. Personally identifiable information may include, but
            is not limited to:
          </p>
          <ul className="list-disc">
            <li className="text-base text-blackE dark:text-white">Email address</li>
            <li className="text-base text-blackE dark:text-white">First name and last name</li>
            <li className="text-base text-blackE dark:text-white"> Phone number</li>
            <li className="text-base text-blackE dark:text-white">
              Address, State, Province, ZIP/Postal code, City
            </li>
            <li className="text-base text-blackE dark:text-white">Usage Data</li>
          </ul>
          <p className="text-base text-blackE dark:text-white mt-6 font-bold">Usage Data</p>
          <p className="text-base text-blackE dark:text-white">
            Usage Data is collected automatically when using the Service.
          </p>
          <p className="text-base text-blackE dark:text-white">
            Usage Data may include information such as Your Device's Internet
            Protocol address (e.g. IP address), browser type, browser version,
            the pages of our Service that You visit, the time and date of Your
            visit, the time spent on those pages, unique device identifiers and
            other diagnostic data. When You access the Service by or through a
            mobile device, We may collect certain information automatically,
            including, but not limited to, the type of mobile device You use,
            Your mobile device unique ID, the IP address of Your mobile device,
            Your mobile operating system, the type of mobile Internet browser
            You use, unique device identifiers and other diagnostic data. We may
            also collect information that Your browser sends whenever You visit
            our Service or when You access the Service by or through a mobile
            device. Information Collected while Using the Application While
            using Our Application, in order to provide features of Our
            Application, We may collect, with Your prior permission:
          </p>
          <p className="text-base text-blackE dark:text-white">
            {" "}
            Pictures and other information from your Device's camera and photo
            library We use this information to provide features of Our Service,
            to improve and customize Our Service. The information may be
            uploaded to the Company's servers and/or a Service Provider's server
            or it may be simply stored on Your device. You can enable or disable
            access to this information at any time, through Your Device
            settings.
          </p>
          <p className="text-base text-blackE dark:text-white  mt-6 font-bold">
            Use of Your Personal Data
          </p>
          <p className="text-base text-blackE dark:text-white">
            The Company may use Personal Data for the following purposes:
          </p>
          <ul className="list-disc">
            <li className="text-base text-blackE dark:text-white">
              To provide and maintain our Service, including to monitor the
              usage of our Service.
            </li>
            <li className="text-base text-blackE dark:text-white">
              To manage Your Account: to manage Your registration as a user of
              the Service. The Personal Data You provide can give You access to
              different functionalities of the Service that are available to You
              as a registered user.
            </li>
            <li className="text-base text-blackE dark:text-white">
              For the performance of a contract: the development, compliance and
              undertaking of the purchase contract for the products, items or
              services You have purchased or of any other contract with Us
              through the Service.
            </li>
            <li className="text-base text-blackE dark:text-white">
              To contact You: To contact You by email, telephone calls, SMS, or
              other equivalent forms of electronic communication, such as a
              mobile application's push notifications regarding updates or
              informative communications related to the functionalities,
              products or contracted services, including the security updates,
              when necessary or reasonable for their implementation.
            </li>
            <li className="text-base text-blackE dark:text-white">
              To provide You with news, special offers and general information
              about other goods, services and events which we offer that are
              similar to those that you have already purchased or enquired about
              unless You have opted not to receive such information.
            </li>
            <li className="text-base text-blackE dark:text-white">
              To manage Your requests: To attend and manage Your requests to Us.
              For business transfers: We may use Your information to evaluate or
              conduct a merger, divestiture, restructuring, reorganization,
              dissolution, or other sale or transfer of some or all of Our
              assets, whether as a going concern or as part of bankruptcy,
              liquidation, or similar proceeding, in which Personal Data held by
              Us about our Service users is among the assets transferred.
            </li>
            <li className="text-base text-blackE dark:text-white">
              For other purposes: We may use Your information for other
              purposes, such as data analysis, identifying usage trends,
              determining the effectiveness of our promotional campaigns and to
              evaluate and improve our Service, products, services, marketing
              and your experience.
            </li>
            <li className="text-base text-blackE dark:text-white">
              We may share Your personal information in the following
              situations:
            </li>
            <li className="text-base text-blackE dark:text-white">
              With Service Providers: We may share Your personal information
              with Service Providers to monitor and analyze the use of our
              Service, to contact You.
            </li>
            <li className="text-base text-blackE dark:text-white">
              For business transfers: We may share or transfer Your personal
              information in connection with, or during negotiations of, any
              merger, sale of Company assets, financing, or acquisition of all
              or a portion of Our business to another company.
            </li>
            <li className="text-base text-blackE dark:text-white">
              With Affiliates: We may share Your information with Our
              affiliates, in which case we will require those affiliates to
              honor this Privacy Policy. Affiliates include Our parent company
              and any other subsidiaries, joint venture partners or other
              companies that We control or that are under common control with
              Us.
            </li>
            <li className="text-base text-blackE dark:text-white">
              With business partners: We may share Your information with Our
              business partners to offer You certain products, services or
              promotions.
            </li>
            <li className="text-base text-blackE dark:text-white">
              With other users: when You share personal information or otherwise
              interact in the public areas with other users, such information
              may be viewed by all users and may be publicly distributed
              outside. If You interact with other users or register through a
              Third-Party Social Media Service, Your contacts on the Third-Party
              Social Media Service may see Your name, profile, pictures and
              description of Your activity. Similarly, other users will be able
              to view descriptions of Your activity, communicate with You and
              view Your profile.
            </li>
            <li className="text-base text-blackE dark:text-white">
              With Your consent: We may disclose Your personal information for
              any other purpose with Your consent.
            </li>
          </ul>
          <p className="text-base text-blackE dark:text-white mt-6 font-bold">
            Retention of Your Personal Data
          </p>
          <p className="text-base text-blackE dark:text-white">
            The Company will retain Your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use Your Personal Data to the extent necessary to comply
            with our legal obligations (for example, if we are required to
            retain your data to comply with applicable laws), resolve disputes,
            and enforce our legal agreements and policies.
          </p>
          <p className="text-base text-blackE dark:text-white">
            The Company will also retain Usage Data for internal analysis
            purposes. Usage Data is generally retained for a shorter period of
            time, except when this data is used to strengthen the security or to
            improve the functionality of Our Service, or We are legally
            obligated to retain this data for longer time periods.
          </p>
          <p className="text-base text-blackE dark:text-white">
            Transfer of Your Personal Data
          </p>
          <p className="text-base text-blackE dark:text-white">
            Your information, including Personal Data, is processed at the
            Company's operating offices and in any other places where the
            parties involved in the processing are located. It means that this
            information may be transferred to — and maintained on — computers
            located outside of Your state, province, country or other
            governmental jurisdiction where the data protection laws may differ
            than those from Your jurisdiction.
          </p>
          <p className="text-base text-blackE dark:text-white">
            Your consent to this Privacy Policy followed by Your submission of
            such information represents Your agreement to that transfer.
          </p>
          <p className="text-base text-blackE dark:text-white">
            The Company will take all steps reasonably necessary to ensure that
            Your data is treated securely and in accordance with this Privacy
            Policy and no transfer of Your Personal Data will take place to an
            organization or a country unless there are adequate controls in
            place including the security of Your data and other personal
            information.
          </p>
          <p className="text-base text-blackE dark:text-white font-bold mt-6">
            Disclosure of Your Personal Data
          </p>
          <p className="text-base text-blackE dark:text-white font-bold mt-6">
            Business Transactions
          </p>
          <p className="text-base text-blackE dark:text-white">
            If the Company is involved in a merger, acquisition or asset sale,
            Your Personal Data may be transferred. We will provide notice before
            Your Personal Data is transferred and becomes subject to a different
            Privacy Policy.
          </p>
          <p className="text-base text-blackE dark:text-white">Law enforcement</p>
          <p className="text-base text-blackE dark:text-white">
            Under certain circumstances, the Company may be required to disclose
            Your Personal Data if required to do so by law or in response to
            valid requests by public authorities (e.g. a court or a government
            agency).
          </p>
          <p className="text-base text-blackE dark:text-white">Other legal requirements</p>
          <p className="text-base text-blackE dark:text-white">
            The Company may disclose Your Personal Data in the good faith belief
            that such action is necessary to:
          </p>
          <ul className="list-disc">
            <li className="text-blackE dark:text-white text-base">
              Comply with a legal obligation
            </li>
            <li className="text-blackE dark:text-white text-base">
              Protect and defend the rights or property of the Company
            </li>
            <li className="text-blackE dark:text-white text-base">
              Prevent or investigate possible wrongdoing in connection with the
              Service
            </li>
            <li className="text-blackE dark:text-white text-base">
              Protect the personal safety of Users of the Service or the public
            </li>
            <li className="text-blackE dark:text-white text-base">
              Protect against legal liability
            </li>
          </ul>
          <p className="text-base text-blackE dark:text-white mt-6 font-bold">
            Security of Your Personal Data
          </p>
          <p className="text-base text-blackE dark:text-white">
            The security of Your Personal Data is important to Us, but remember
            that no method of transmission over the Internet, or method of
            electronic storage is 100% secure. While We strive to use
            commercially acceptable means to protect Your Personal Data, We
            cannot guarantee its absolute security.
          </p>
          <p className="text-base text-blackE dark:text-white font-bold mt-6">
            Children's Privacy
          </p>
          <p className="text-base text-blackE dark:text-white">
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under the age of 13. If You are a parent or guardian and You are
            aware that Your child has provided Us with Personal Data, please
            contact Us. If We become aware that We have collected Personal Data
            from anyone under the age of 13 without verification of parental
            consent, We take steps to remove that information from Our servers.
          </p>
          <p className="text-base text-blackE dark:text-white">
            If We need to rely on consent as a legal basis for processing Your
            information and Your country requires consent from a parent, We may
            require Your parent's consent before We collect and use that
            information.
          </p>
          <p className="text-base text-blackE dark:text-white mt-6 font-bold">
            Links to Other Websites
          </p>
          <p className="text-base text-blackE dark:text-white">
            Our Service may contain links to other websites that are not
            operated by Us. If You click on a third party link, You will be
            directed to that third party's site. We strongly advise You to
            review the Privacy Policy of every site You visit. We have no
            control over and assume no responsibility for the content, privacy
            policies or practices of any third party sites or services.
          </p>
          <p className="text-base text-blackE dark:text-white mt-6 font-bold">
            Changes to this Privacy Policy
          </p>
          <p className="text-base text-blackE dark:text-white">
            We may update Our Privacy Policy from time to time. We will notify
            You of any changes by posting the new Privacy Policy on this page.
            We will let You know via email and/or a prominent notice on Our
            Service, prior to the change becoming effective and update the "Last
            updated" date at the top of this Privacy Policy.
          </p>
          <p className="text-base text-blackE dark:text-white">
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
          <p className="text-base text-blackE dark:text-white font-bold mt-6">Contact Us</p>
          <p className="text-base text-blackE dark:text-white">
            If you have any questions about this Privacy Policy, You can contact
            us:
          </p>
          <ul className="list-disc">
            <li className="text-base text-blackE dark:text-white">
              By email: hi@softdroom.com
            </li>
            <li className="text-base text-blackE dark:text-white">
              By visiting this page on our website: softdroom.com
            </li>
            <li className="text-base text-blackE dark:text-white">
              By mail: Covent Garden, 71-75 Shelton Street
            </li>
          </ul>
        </div>
      </div>
    </ContainerLayout>
  );
}

export default PrivacyPolicy