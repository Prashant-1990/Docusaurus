# Chapter 1: Introduction and Installation

When I first heard the word Docusaurus, I was of the opinion that it's definitely got something to do with the Dinosaurus. What did the Dinosaurs got to do with documentation was a question ringing in my mind and thanks to this question; it led me to explore Docusaurus. 

As a part of my quest to comprehend Docusaurus is what led me to come up with this guide. 


# Tutorial Outline

This tutorial would quickly start with the installation of Docusaurus. Once installed, we will navigate the various directories provided by Docusaurus. We would then learn how to customize the default site. Next up, we will see how to add content (documents and blogs) to our Docusaurus site. Finally, we will learn how to implement some of the advanced features in our site. 

Docusaurus is an open source static site generator developed by Meta (formerly Facebook). Docusaurus works on the principle of docs as code and helps users build a documentation site from ground zero. 

So, as a Technical Writer, how exactly can Docusaurus help you? Well, you can create an entire documentation website from scratch and host it online without using any commercial documentation tools. To top it all, you can implement the docs as code principles like ensuring that documentation is always in sync with the latest product updates, better collaboration with developers, documentation versioning, and so on.  Apart from organization documentation, you can also use Docusaurus to host your personal blog site absolutely free. Docusaurus provides much more customization options than traditional blogging sites. 

Some of the features that make Docusaurus a real game changer are as follows.



* **Customization Options**: A Docusaurus site is not a typical blog site with limited customization options. Docusaurus provides you with a bunch of customization options which you can use to modify the look and feel of your site to match your organization color palette. 
* **Versioning**: Docusaurus supports documentation versioning; a feature missing in many of the paid documentation tools. You can maintain multiple versions of documentation. Each version can represent a product version and customers can choose the doc version as per their product version.   
* **Search Bar**: Docusaurus provides a fully customizable search bar. You can not just customize the location and layout of the search bar but also the search method. You can either use the browser search or the [Algolia](https://www.algolia.com/) search 
* **Plugins**: Docusaurus provides a host of plugins to enhance your site. You can easily leverage these plugins by just adding tiny snippets of code. Furthermore, if you are tech-savvy you can create your own plugins too. 
* **Monolithic Repository (Monorepo)**: Docusaurus advocates Monorepo; a concept in which both docs and code exist in a single repository (under different directories). So, every time a change request is created in the monorepo, the technical writer is notified. Writers can sync up with developers to enquire about the changes being done and analyze if doc changes are required, thus ensuring that docs are always in sync with product updates. 
* **Markdown Support**: Markdown is a markup language widely used in various facets of Technical Writing like API documentation, formatted text documentation, and so on. The key advantage of Markdown is that it supports formatting of plain text by providing formatting elements like bullet points, headings, numbered lists, hyperlinks, and so on. 


# Prerequisites



* Ensure that you have the **Node.js** package installed on your system. You can download it from the [official website.](https://nodejs.org/en/download) 


# Installation

The Docusaurus installation process is fairly simple and straightforward. You need to execute a few commands in a Command Prompt and Docusaurus is installed. 



1. Execute the following command to ensure that node.js is installed on your system. 

    ```
node -v
```



If the aforementioned command returns the node.js version, it confirms the presence of node.js. If you do not see the node.js version, refer to the 

<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: undefined internal link (link text: "prerequisite"). Did you generate a TOC with blue links? </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

[prerequisite](#heading=h.qw67a7jzgu55) section. 



2. Execute the following command to install Docusaurus project in classic mode. 

    ```
npx create-docusaurus@latest my-website classic
```



**Notes**: 



* You will be asked to choose between Javascript and Typescript languages during installation. You can choose Javascript unless you are very good with Typescript. 
* The Docusaurus project is created in a directory called my-website. If you wish to create the project with an alternate name, replace the term `my-website` in the above command with your preferred name. 
* Once installed, you should navigate to the directory in which the Docusaurus project exists. 

    ```
cd my-website
```



Note: If you have used a different directory name in step 2, you must replace my-website with your directory name. 



3. Start the Docusaurus website by executing the following command. 

    ```
npm run start
```



This command opens up the Docusaurus site in your web browser. The default port is 3000. This session is open as long as the command prompt window is open. If you close the tab or the entire browser, you just need to type `localhost:3000` in your browser’s address bar and the Docusaurus site opens up again.

The *my-website* (or the custom name provided in step 2) directory is created in the `users/&lt;logged in user>` directory. This is applicable to both MAC and Windows based devices. The *my-website *directory consists of the following files and subdirectories. 



* **docusaurus.config.js File**: The configuration file written in javascript. In this file, you can edit the code to control your site details like navigation bar, footer, search configuration, plugins, themes, routing, site metadata (title, tagline), and so on
* **sidebars.js File**: This javascript file contains the sidebar details for the docs section. You can configure the order in which docs should appear on your site, in this file.
* **package.json File**: This JSON file contains project metadata and handles dependencies and scripts. Docusaurus commands like Start, Build, and Deploy are defined in this file. 
* **README.md File**: Describes your project setup and instructions for developers.
* docs Subdirectory: This subdirectory holds all your documentation pages (written in Markdown or MDX). These files automatically appear in the sidebar (if configured).
* blog Subdirectory (optional): If you enable the blog feature, this directory holds blog posts. Posts are written in Markdown or MDX.
* src/ (React components, pages, and styling)
    * src/pages: Contains custom static pages like homepage (index.js) or About page.
    * src/components/: Your custom React components (e.g., Tile, Card, HeroBanner). You can reuse them in any page or doc.
    * src/css/: Place your custom CSS (like custom.css) here to override styles or add new ones.
* Static: Everything here gets copied directly to the final site root. Good for images, icons, PDFs, favicons, etc.