# frontend-interview-prompt
This is the homework assignment given to prospective frontend engineers. This task should not take more than 4 hours of your time. This prompt itself should last 3.5 hours, with half an hour to fill out the remaining questions on this README. 

## Task
Create a dashboard as close as possible to the following image: 
![Dashboard_mockup](https://i.imgur.com/5yDwTXk.png)

The graphs underneath <strong> Site Visits </strong> and <strong> Revenue </strong> can be placeholder images and any image that you see fit. 

## Getting started

Fork this project and clone it into your own repository. 

Please use any front-end framework you are comfortable with. 
We suggest getting started with [material-ui](https://material-ui.com/) as they have many of the the components pre-built. If you are using a different framework, there are usually equivalent libraries for material design. 

If you choose to start from scratch the font-type is: [Roboto](https://fonts.google.com/specimen/Roboto),

## Things we are looking for 
- [ ] Are the margins and padding similar to the image? Were the colors close? 
- [ ] Were clickable items accounted for with the right elements? e.g. (was a button or dropdown element used where it should have been used)
- [ ] How was the project set up? 
- [ ] If deviations to the design were made, were they justified? 

### Going above and beyond
Before moving onto these, please make sure you are happy with the overall look of your dashboard already! 
- [ ] Use your best judgement to make the dashboard responsive and collapsible at 1200px breakpoint. 
      - The lefthand drawer should collapse at 1200px.  
      - The "Totals" Section should collapse to a 2x2 block
      - The two graph blocks should stack. 

- [ ] If you have extra time, replace the placeholder images with dummy data and graphs from a visualization library like C3, D3, or React Vis. The filters on the graph do not have to work, but please share below if you had more time what you would filter on. 

- [ ] Replace the `Totals` section with data from the following endpoint with a new request being made each refresh: http://www.mocky.io/v2/5d018fbd3100005400ab2968, use your best judgement how to handle this new data. 

## Questions To Answer: 
This is your chance to talk about the prompt! Please provide these answers on your README. 
- Please share your screen resolution, OS, browser version (best if you're using latest) you used to test in so we can look at it in: 

    ```Screen Resolution: 2880 x 1800 ```
    ```OS:  MacOS Mojave v 10.14.6```
    ```Browser:  Google Chrome Version 79.0.3945.117 (Official Build) (64-bit)```

- What part of the design did you get stuck on? What took the most time? Similarly, what was the easiest part? 

    ```Hardest: Polish, due to time constraints and no accessible assets at the time, I left out all of the assets for the last part, but ran out of time. This was mostly due for me making everything from scratch and not really utilizing material/ui for this project.```
    ```Easiest: Positioning UI elements where I would like them to be, and getting up and running to develop the dashboard's content```

- What part of the design didn't make sense? Did you change anything?

    ```The only thing that has changed was the line breack between the numbers in the dashboard, I felt like having a universal padding and giving a bit more white space on the left and right of the box looked clearer```

- If you had more time, what would you have liked to implement? 

    ```Polish, polish, polish and the obvious missing icons```

- What did you have to research or lookup while working on this?

    ```Adding Google fonts to a Gatsby project```

*** TO RUN THE PROJECT ***

- First do a npm install to install all dependencies and then do the following to run the project. 

    ```npm run develop``` || ```gatsby develop```

- After your terminal should give information to which host url you can use to view the project.