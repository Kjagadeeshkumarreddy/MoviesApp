# **MoviesApp**

A dynamic and responsive web application built with **React.js** to browse and discover movies. This project demonstrates core front-end development skills, including API integration, state management with React Hooks, and client-side routing.

## **🚀 Key Features**

* **Browse Movies**: Explore categorized lists of popular, trending, and top-rated movies.  
* **Search Functionality**: Quickly find any movie by title using the search bar.  
* **Detailed Views**: Click on any movie to view a comprehensive page with its summary, cast, and ratings.  
* **Responsive Design**: The user interface is designed to work seamlessly on all devices, including desktops, tablets, and mobile phones.  
* **API Integration**: The application fetches real-time movie data from a public API, such as The Movie Database (TMDb).

## **🛠️ Technologies Used**

* **Frontend**: React.js  
* **Styling**: CSS for custom styles  
* **Routing**: React Router  
* **API Client**: fetch  
* **Package Manager**: npm or yarn

## **⚙️ Installation and Setup**

Follow these steps to set up and run the project on your local machine.

### **1\. Clone the repository**

Open your terminal and run the following command to clone the project:

git clone \[https://github.com/kjagadeeshkumarreddy/MoviesApp.git\](https://github.com/kjagadeeshkumarreddy/MoviesApp.git)  
cd MoviesApp

### **2\. Install dependencies**

Navigate into the project directory and install the necessary dependencies:

\# Using npm  
npm install

\# Or using yarn  
yarn install

### **3\. Set up the API Key**

Create a new file named .env in the root directory of the project and add your TMDB API key to it. You can get a key by signing up on their website.

REACT\_APP\_TMDB\_API\_KEY=your\_api\_key\_here

### **4\. Run the application**

Start the local development server. The application will be available at http://localhost:3000.

npm start  
\# or  
yarn start

## **⚠️ Important Note on API Connectivity**

Some Internet Service Providers (ISPs) may block direct access to the TMDB API. If the application fails to fetch data, you may need to change your DNS settings to a public DNS provider like Google Public DNS.

### **How to Change Your DNS**

**For Windows:**

1. Go to the **Control Panel** and open **Network and Sharing Center**.  
2. Click on **Change adapter settings**.  
3. Right-click your active connection (e.g., Wi-Fi or Ethernet) and select **Properties**.  
4. Select **Internet Protocol Version 4 (TCP/IPv4)** and click **Properties**.  
5. Choose **Use the following DNS server addresses**.  
6. Enter 8.8.8.8 as the **Preferred DNS server** and 8.8.4.4 as the **Alternate DNS server**.  
7. Click **OK** to save the changes.

**For macOS:**

1. Open **System Settings**.  
2. Click on **Network**.  
3. Select your active connection (e.g., Wi-Fi or Ethernet) from the left sidebar and click **Details...**  
4. Go to the **DNS** tab.  
5. Click the \+ button and add 8.8.8.8 and 8.8.4.4 to the DNS servers list.  
6. Click **OK** to apply the changes.

## **📄 License**

This project is licensed under the MIT License.

## **👨‍💻 Author**

**K Jagadeesh Kumar Reddy**

* GitHub: [https://github.com/kjagadeeshkumarreddy](https://www.google.com/search?q=https://github.com/kjagadeeshkumarreddy)  
* Portfolio: [https://kjagadeeshkumarreddy.github.io](https://www.google.com/search?q=https://kjagadeeshkumarreddy.github.io)
