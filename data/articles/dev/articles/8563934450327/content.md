<p>Effective date: July 8, 2024</p>
<p>Last updated: June 6, 2024</p>
<p>
  <a
    href="https://support-dev.discord.com/hc/articles/25280499088279"
    target="_blank"
    rel="noopener noreferrer"
    >For a link to the previous policy, please see here.</a
  >
</p>
<p> </p>
<p>
  <span style="color: #23272a" data-darkreader-inline-color=""
    >Discord is a place where developers can come to build cool experiences to
    further the way that people connect. As Discord continues to grow and
    support our developers, it’s important to be transparent about the
    responsibilities and our expectations of developers and their Applications.
    This document sets forth the rules developers will need to follow to develop
    and operate their Applications.</span
  >
</p>
<h2 id="h_01HZPPR8CNJNJ02ZMHKVWSSBFS">Introduction</h2>
<p>
  <span style="color: #23272a" data-darkreader-inline-color=""
    >This Discord Developer Policy is incorporated into the </span
  ><a
    href="https://dis.gd/discord-developer-terms-of-service"
    target="_blank"
    rel="noopener noreferrer"
    >Discord Developer Terms of Service</a
  ><span style="color: #23272a" data-darkreader-inline-color="">
    (“Developer Terms”), and you agree that it applies to your access to and use
    of our APIs in addition to the Developer Terms and other Terms. Capitalized
    terms not otherwise defined herein (including “API Data” and “Application”)
    have the meaning assigned to them in the Developer Terms. For clarity, the
    term “including” as used herein means “including without limitation.”</span
  >
</p>
<p> </p>
<p>
  <span style="color: #23272a" data-darkreader-inline-color=""
    >As described in the Developer Terms (including Section 9), we may take
    enforcement actions for any Enforcement Reason, including if we believe you
    or your Application have violated this Developer Policy. If you come across
    an Application that you believe violates any of these policies, </span
  ><a href="https://support.discord.com/hc/en-us/requests/new"
    ><span
      class="wysiwyg-underline"
      style="color: #1155cc"
      data-darkreader-inline-color=""
      >please report it to us</span
    ></a
  ><span style="color: #23272a" data-darkreader-inline-color="">.</span>
</p>
<p> </p>
<p>
  <span style="color: #23272a" data-darkreader-inline-color=""
    >Please check back here regularly, as we may update these policies from time
    to time, and your continued access to or use of the APIs after such updates
    go into effect means you accept and agree to them. Additional terms and
    policies may also apply to your access to or use of certain APIs (including
    as described in or available via our </span
  ><a href="https://discord.com/developers/docs/intro"
    ><span
      class="wysiwyg-underline"
      style="color: #1155cc"
      data-darkreader-inline-color=""
      >Developer Portal</span
    ></a
  ><span style="color: #23272a" data-darkreader-inline-color=""> or </span
  ><a href="https://support-dev.discord.com/hc/categories/360000656491"
    ><span
      class="wysiwyg-underline"
      style="color: #1155cc"
      data-darkreader-inline-color=""
      >Help Center</span
    ></a
  ><span style="color: #23272a" data-darkreader-inline-color="">).</span>
</p>
<h2 id="h_01HZPPR8CNHKP0XGQ2B6H4WFPY">Monetization Requirements</h2>
<p>
  <span style="color: #23272a" data-darkreader-inline-color=""
    >All Applications attempting to monetize through our services must abide by
    Discord’s </span
  ><a
    href="https://support.discord.com/hc/en-us/articles/5330075836311-Monetization-Terms"
    ><span
      class="wysiwyg-underline"
      style="color: #1155cc"
      data-darkreader-inline-color=""
      >Monetization Terms</span
    ></a
  ><span style="color: #23272a" data-darkreader-inline-color=""> and </span
  ><a
    href="https://support.discord.com/hc/en-us/articles/10575066024983-Server-Monetization-Policy"
    ><span
      class="wysiwyg-underline"
      style="color: #1155cc"
      data-darkreader-inline-color=""
      >Monetization Policy</span
    ></a
  ><span style="color: #23272a" data-darkreader-inline-color="">.</span>
</p>
<p> </p>
<p>
  <span style="color: #23272a" data-darkreader-inline-color=""
    >Beginning on October 7, 2024, in regions where Discord supports
    monetization through its Premium Apps products, all developers who offer
    paid features or capabilities for their Application will be required
    to:</span
  >
</p>
<ul>
  <li>
    <span style="color: #23272a" data-darkreader-inline-color=""
      >(i) support purchase of such features or capabilities through Discord’s
      Premium Apps products; and, </span
    >
  </li>
  <li>
    <span style="color: #23272a" data-darkreader-inline-color=""
      >(ii) offer such features or capabilities at prices on Discord that are no
      higher than the prices at which they are offered through other payment
      options.</span
    >
  </li>
</ul>
<p> </p>
<p>
  <span style="color: #23272a" data-darkreader-inline-color=""
    >“Paid features or capabilities” can include things like subscriptions to
    your Application, access to certain features or content, one-time purchases,
    recurring subscriptions, and more. Only paid features or capabilities that
    are offerings supported by Discord’s Premium Apps products will be subject
    to these requirements. As new types of offerings are supported via Discord’s
    Premium Apps products, developers will be given a reasonable period of time
    to implement them into their Application, if applicable.</span
  >
</p>
<h2 id="h_01HZPPR8CN8FFJ4RX1238X6EA5">Protect Discord Users</h2>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >1. Do not modify a Discord user’s account without explicit permission
      from the Discord user.
    </span></strong
  ><span style="color: #23272a" data-darkreader-inline-color=""
    >Functionality that intends to make any changes to a Discord account (e.g.,
    adding the account to a server) must clearly and properly inform the Discord
    account owner of the changes and receive explicit permission to enact the
    changes.</span
  >
</p>
<p> </p>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >2. Do not initiate processes on a user or server’s behalf without first
      obtaining their permission.</span
    ></strong
  ><span style="color: #23272a" data-darkreader-inline-color="">
    The manner of providing the option for permission must be clearly labeled
    and apparent, and contain an accurate description of the purpose or feature
    being enabled.</span
  >
</p>
<p> </p>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >3. Do not enable your Application to bypass or circumvent Discord’s
      privacy, safety, and/or security features.</span
    ></strong
  ><span style="color: #23272a" data-darkreader-inline-color="">
    Your Application must respect user decisions to opt out of or block the
    Application, as applicable. Your Application must respect users’ ability to
    remove the Application from spaces (e.g., servers or channels) where it is
    present.</span
  >
</p>
<p> </p>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >4. Do not collect, solicit, or deceive users into providing passwords or
      other credentials.
    </span></strong
  ><span style="color: #23272a" data-darkreader-inline-color=""
    >Under no circumstances may you or your Application request or attempt to
    obtain login credentials from Discord users. This includes information such
    as passwords or account access or login tokens.</span
  >
</p>
<p> </p>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >5. Do not contact users on Discord without their explicit
      permission.</span
    ></strong
  ><span style="color: #23272a" data-darkreader-inline-color="">
    This includes frequently sending unsolicited direct messages and/or sending
    direct messages not directly related to maintaining or improving an
    Application's functionality.</span
  >
</p>
<p> </p>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >6. Do not target users with advertisements or marketing.</span
    ></strong
  ><span style="color: #23272a" data-darkreader-inline-color="">
    Messaging to Discord users from any Application or developer team should be
    relevant to the function of the Application and may not contain material
    unrelated to an Application’s function or information.</span
  >
</p>
<p> </p>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >7. Do not contact users outside of Discord without their explicit
      permission.</span
    ></strong
  ><span style="color: #23272a" data-darkreader-inline-color="">
    You should not contact Discord users outside of the Discord platform using
    API Data (including any data obtained, disclosed, or inferred through the
    use of your Application).</span
  >
</p>
<h2 id="h_01HZPPR8CNY3W7194XNDKG2DR0">Respect Our Platform Rules</h2>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >8. Do not use the APIs for any dangerous or illegal activity.</span
    ></strong
  ><span style="color: #23272a" data-darkreader-inline-color="">
    This includes, but is not limited to, activities that facilitate or
    promote:</span
  >
</p>
<ul>
  <li>
    <span style="color: #23272a" data-darkreader-inline-color=""
      >Risks to physical safety;</span
    >
  </li>
  <li>
    <span style="color: #23272a" data-darkreader-inline-color=""
      >Environmental damage; </span
    >
  </li>
  <li>
    <span style="color: #23272a" data-darkreader-inline-color=""
      >Financial scams; or,</span
    >
  </li>
  <li>
    <span style="color: #23272a" data-darkreader-inline-color=""
      >Illegal online gambling.</span
    >
  </li>
</ul>
<p> </p>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >9. Do not direct your Application to people who are under the age of 13
      or the minimum age required by the laws in their applicable countries.
    </span></strong
  ><span style="color: #23272a" data-darkreader-inline-color=""
    >As described in our </span
  ><a href="https://discord.com/terms#2"
    ><span
      class="wysiwyg-underline"
      style="color: #1155cc"
      data-darkreader-inline-color=""
      >Terms of Service</span
    ></a
  ><span style="color: #23272a" data-darkreader-inline-color=""
    >, our services are only for people who are at least 13 years old and meet
    the minimum age required by the laws in their applicable countries.</span
  >
</p>
<ul>
  <li>
    <span style="color: #23272a" data-darkreader-inline-color=""
      >Additionally, you will ensure your Application is properly rated based on
      its content (e.g., game ratings), as required by applicable laws or
      otherwise requested by Discord, and will display such ratings in a manner
      that is clear and visible to users prior to their authorization or use
      (e.g., in your Application's profile).</span
    >
  </li>
</ul>
<p> </p>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >10. Do not use the APIs in any way to violate, or to enable or promote
      others to violate, the
    </span></strong
  ><a href="https://dis.gd/guidelines"
    ><strong
      ><span
        class="wysiwyg-underline"
        style="color: #1155cc"
        data-darkreader-inline-color=""
        >Discord Community Guidelines</span
      ></strong
    ></a
  ><strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >.</span
    ></strong
  ><span style="color: #23272a" data-darkreader-inline-color="">
    As described in the Developer Terms, you are responsible for ensuring that
    your Application is not used to violate any of the Terms. We will take into
    consideration the abundance, explicit negligence, and intentional enabling
    of violating behavior when assessing appropriate enforcement. Prohibited
    behaviors and activities include, but are not limited to, those that:</span
  >
</p>
<ul>
  <li>
    <span style="color: #23272a" data-darkreader-inline-color=""
      >Enable the digital creation of illegal media (e.g., child-harm content,
      non-consensual pornography);</span
    >
  </li>
  <li>
    <span style="color: #23272a" data-darkreader-inline-color=""
      >Distribute adult content to users under the age of 18, or without
      age-restricted labels (where applicable) to users ages 18 and older;
      or,</span
    >
    <ul>
      <li>
        <span style="color: #23272a" data-darkreader-inline-color=""
          >Unless your Application is labeled as age-restricted, you will make
          sure your Application is appropriate for users under the age of 18 and
          complies with all applicable laws (including those applicable to users
          under the age of 18).</span
        >
      </li>
    </ul>
  </li>
  <li>
    <span style="color: #23272a" data-darkreader-inline-color=""
      >Enable, promote, or organize any type of on- or off-platform
      harassment.</span
    >
  </li>
</ul>
<p> </p>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >11. Do not display, post, or promote violent or violent extremist
      content, messages, or images.</span
    ></strong
  ><span style="color: #23272a" data-darkreader-inline-color="">
    This includes the fields in an Application’s Settings page in the Discord
    Developer Portal.</span
  >
</p>
<p> </p>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >12. Do not impersonate other Applications, Discord employees or partners,
      or Discord services.
    </span></strong
  ><span style="color: #23272a" data-darkreader-inline-color=""
    >This includes deception via your and your Application’s account and
    identity. Note that we allow clearly labeled satire, parody, and fan
    accounts.</span
  >
</p>
<p> </p>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >13. Do not misrepresent or fraudulently manipulate engagement.</span
    ></strong
  ><span style="color: #23272a" data-darkreader-inline-color="">
    This includes participating in, enabling, or promoting the inflation of
    server membership with bot or user accounts. This also includes automating
    messages to be sent for the purpose of maintaining activity in a Discord
    server.</span
  >
</p>
<p> </p>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >14. Do not evade permanent Discord-level enforcement actions.
    </span></strong
  ><span style="color: #23272a" data-darkreader-inline-color=""
    >Developers of Applications removed for violating our Developer Policy may
    not recreate the same or substantially similar Applications.</span
  >
</p>
<p> </p>
<p>
  <span style="color: #23272a" data-darkreader-inline-color=""
    >In addition to the rules above, developers must: (1.) provide users of
    their Application with a way to report issues or violations relating to the
    Application or its use (including violations of our platform rules and other
    Terms); and, (2.) review such reports and take appropriate action. </span
  >
</p>
<p> </p>
<p>
  <span style="color: #23272a" data-darkreader-inline-color=""
    >Additionally, developers should use commercially reasonable efforts to make
    themselves available for feedback or user support regarding their
    Application.</span
  >
</p>
<h2 id="h_01HZPPR8CNCG66RDYHK6CCFBDZ">Handle Data with Care</h2>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >15. Do not use API Data for any purpose outside of what is necessary to
      provide your stated functionality.</span
    ></strong
  ><span style="color: #23272a" data-darkreader-inline-color="">
    You may not request, access, or use API Data for any purpose other than as
    necessary to provide your Application’s stated (and approved through App
    Review, as applicable) functionality; provided that you may also use API
    Data for the purpose of improving your Application only if it has been
    aggregated or de-identified such that it cannot be associated with, or used
    to identify, any individual.</span
  >
</p>
<p> </p>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >16. Do not use API Data to:
    </span></strong
  ><span style="color: #23272a" data-darkreader-inline-color=""
    >profile Discord users, their identities, or their relationships with other
    users; to discriminate against anyone based on protected characteristics (as
    defined in our </span
  ><a href="https://dis.gd/guidelines"
    ><span
      class="wysiwyg-underline"
      style="color: #1155cc"
      data-darkreader-inline-color=""
      >Community Guidelines</span
    ></a
  ><span style="color: #23272a" data-darkreader-inline-color=""
    >); or, for eligibility considerations for benefits or for purposes such as
    employment, housing, insurance, or otherwise.</span
  >
</p>
<ul>
  <li>
    <span style="color: #23272a" data-darkreader-inline-color=""
      >Furthermore, you may not, and may not use your Application to, obtain API
      Data or transmit data to Discord (i) of persons under the age of 13 or the
      minimum age required by law in their jurisdiction (if older) or (ii) that
      includes protected health information, financial information, or other
      sensitive information under applicable law, except to the extent
      specifically allowed by our Terms for a given Discord service or if
      necessary to process a financial transaction as enabled by a Discord
      service.</span
    >
  </li>
</ul>
<p> </p>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >17. Do not disclose API Data to data brokers, advertising networks or
      services, or any other monetization-related service.</span
    ></strong
  >
</p>
<p> </p>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >18. Do not sell, license, or otherwise commercialize API Data or any of
      Discord’s services (as defined in our
    </span></strong
  ><a href="https://discord.com/terms"
    ><strong
      ><span
        class="wysiwyg-underline"
        style="color: #1155cc"
        data-darkreader-inline-color=""
        >Terms of Service</span
      ></strong
    ></a
  ><strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >, e.g., Nitro subscriptions).</span
    ></strong
  >
</p>
<p> </p>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >19. Do not attempt to re-identify, de-anonymize, unscramble, unencrypt,
      or reverse hash or reverse engineer API Data from the form in which you
      obtain it.</span
    ></strong
  >
</p>
<p> </p>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >20. Do not mine or scrape any data, content, or information available on
      or through Discord services (as defined in our Terms of Service).</span
    ></strong
  >
</p>
<p> </p>
<p>
  <strong
    ><span style="color: #23272a" data-darkreader-inline-color=""
      >21. Do not use message content obtained through the APIs to train machine
      learning or AI models (including large language models) unless express
      permission is granted by Discord.</span
    ></strong
  >
</p>
<p> </p>
<p>
  <span style="color: #23272a" data-darkreader-inline-color=""
    >Note that we require developers to notify Discord and affected users of
    potential unauthorized access to API Data, as described in Section 5 of the
    Developer Terms.</span
  >
</p>
<p> </p>
<p>
  <span style="color: #23272a" data-darkreader-inline-color=""
    >For the avoidance of doubt, the above policies apply in addition to the
    terms relating to API Data described in the Developer Terms (including
    Section 5 (User Privacy and Security)), and use of data includes how you
    access, collect, store, retain, transmit, share, and otherwise process
    it.</span
  >
</p>
<h2 id="h_01HZPPR8CNX5Y1B5H7RFP0ERQX">API Limits</h2>
<p>
  <span style="color: #23272a" data-darkreader-inline-color=""
    >As described in the </span
  ><a
    href="https://dis.gd/discord-developer-terms-of-service"
    target="_blank"
    rel="noopener noreferrer"
    >Developer Terms</a
  ><span style="color: #23272a" data-darkreader-inline-color=""
    >, Discord may set and enforce limits on your use of the APIs (e.g., by
    limiting the number of API requests that you may make, or the number of
    users you may serve) at our sole discretion. You agree to, and will not
    attempt to circumvent, such limitations we set for each API.</span
  >
</p>
<p> </p>
<p>
  <span style="color: #23272a" data-darkreader-inline-color=""
    >If you would like to use any API beyond these limits, you must obtain
    Discord’s express written consent. Discord may, at our discretion, decline
    such request or condition acceptance on your agreement to additional terms
    and/or charges for such use.</span
  >
</p>
