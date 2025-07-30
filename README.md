<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="https://github.com/user-attachments/assets/f611c2d3-f026-4cc7-99eb-0b86610b4c8e" alt="Logo" width="180" height="80">
  </a>

<h3 align="center">Snap Events</h3>

  <p align="center">
    Snap Events in a prototype feature that allows users to create events for selected locations on Snap Maps.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Snap Events integrates the once isolated events page with Snap Maps, streamlining the event creation and searching process.

Given a basic outline of an outdated Snapchat app, our task was to enhance an existing feature or introduce a new one. Chanho and I chose to improve the Events feature, focusing on user experience and visual design.

We added the ability to create an event by long-pressing on the map, which drops a pin at that location and displays a "Create Event" button. If the user selects it, they’re then prompted to enter event details. We also improved address-to-map linking — when a user selects an event from the Events page and taps its address, the map now jumps directly to the corresponding pin, allowing users to view the surrounding area.

Lastly, we implemented address autofill: when creating an event via the map, the address field is automatically populated based on the pin location, streamlining the process.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With 

- [![npm][npm.js]][npm-url]
- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![React Native][ReactNative.js]][ReactNative-url]
- [![Expo][Expo.js]][Expo-url]
- [![React Navigation][ReactNavigation.js]][ReactNavigation-url]
- [![React Native Maps][Maps.js]][Maps-url]
- [![Supabase][Supabase.js]][Supabase-url]
- [![JavaScript][JavaScript.js]][JavaScript-url]
- [![GitHub][GitHub.js]][GitHub-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Setting up your own local copy and getting it running. 

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
2. Navigate to the project
   ```sh
   cd your-project-name
   ```
3. Install Node Package Manager by running the following command on your terminal.
   ```sh
   npm install
   ```

  ### 🚀 Setting Up Supabase

1. **Create an Account**  
   - Visit [supabase.com](https://supabase.com) and sign up using GitHub or email.

2. **Create a New Project**  
   - Click **"New Project"**  
   - Choose or create an organization
   - Name your project 
   - Click **"Create Project"**  
   - Wait 1–2 minutes for setup to complete

3. **Get Your API Keys**  
   - Go to your project > **Settings** > **API**  
   - Copy the **Project URL** and **anon public key**

4. **Use in Your App**  
   Add your API Project URL and API Key to your 'env.local' file:

   ```sh
   EXPO_PUBLIC_SUPABASE_URL="https://replace-with-your-projext-url.supabase.co"
   EXPO_PUBLIC_SUPABASE_KEY="replace-with-your-anon-API-key"
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```
  ### Creating the Supabase Database

Example of what the table can look like:
(Pay attention to parameter names, and add .env.local file to the project with your API keys)
[event_table_rows (1).csv](https://github.com/user-attachments/files/21469176/event_table_rows.1.csv)

save this file :)

Steps of getting the table in Supabase:

Go to Supabase --> Table Editor
Press on Create New Table
Make the name of the table "event_table"
On the bottom press Import Data via Spreadsheet
Upload the saved file, it should be named event_table_rows.csv
Select the primary key to be the id
Save changes --> Done, your database is ready
<img width="1439" height="402" alt="Screenshot 2025-07-28 at 5 07 31 AM" src="https://github.com/user-attachments/assets/f515eeeb-e851-4c85-ab93-65295f04145b" />


Key Parameters These are all text aside from createdAt (timestapmz) and private(jsonB)
1. **Id Events: ** We create this by adding the current timestamp to the date and using the built in btoa()
2. **Time: ** The time the event takes place
3. **Title: ** Title for the event
4. **Description: ** The description for each event
5. **Attending : ** not implemented, but would be array of users who said yes
6. **Private : ** not implemented, would be a toggle for whether or not events are visible to non friends
7. ** Host : ** username for who is throwing the event
8. **Image URL : ** Link to image to display
9. **Location : ** Location of the event

Once you've set your data base up, the Events tab in your psuedo Snapchat App will have events!
Try adding your own evens by holding down on a location on the map or going to the events page and creating one there!
Also try selecting one of the events and click it's location to see where it actually is on the map.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->

## License

Distributed under the project_license. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username

[product-screenshot]: images/screenshot.png

[npm.js]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[npm-url]: https://www.npmjs.com/

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[ReactNative.js]: https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[ReactNative-url]: https://reactnative.dev/

[Expo.js]: https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white
[Expo-url]: https://expo.dev/

[ReactNavigation.js]: https://img.shields.io/badge/React_Navigation-000000?style=for-the-badge&logo=react-router&logoColor=white
[ReactNavigation-url]: https://reactnavigation.org/

[Maps.js]: https://img.shields.io/badge/React_Native_Maps-5C5CFF?style=for-the-badge&logo=googlemaps&logoColor=white
[Maps-url]: https://github.com/react-native-maps/react-native-maps

[Supabase.js]: https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white
[Supabase-url]: https://supabase.com/

[JavaScript.js]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript

[GitHub.js]: https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white
[GitHub-url]: https://github.com/
