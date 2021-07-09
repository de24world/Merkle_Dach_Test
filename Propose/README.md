## ToDos
1. Which tools / frameworks / libraries would you use for the setup and why?   
 - Framework : React(Typescript), the best UI Framework(Libarary) for B2C. And the React can expend React Native later, if the customer want to natvie App. Typescript is good for checking data type or other types. React has a lot of option.
 - if the SEO is very important for customer, it can used with Next.js SSR(ServersideRendering) Framework.
 - Libararies : translate - i18n / styling(UI Libarary) - tailwind? / 

2.  Which rendering strategy would you recommend and why?
 - Atomic Design Pattern : Seperate reuseable Component, like Button, Accordion, Form. We can consider storybook. 
 - Styling : save time and more fast develop with UI Libarary (tailwind or antd design) with SCSS
 - REST API :  fetching with axios. And fetching data with at first useEffect(custom hooks)  and if we need global management with redux

3. Make a proposal on how to care on the quality requirements
 - First Step : Eslint(Typescript) + prettier + git hooks
 - Second Step : Jest + Enzyme (Unit Test + Intergartion Text), example : every Component must render without Problem
 - Third Step : BrowerStack, Cross Platform and Mobile
 - Etc : Code Review(Pull&Request), documentation with README.md for developer and Confluence for Customer.