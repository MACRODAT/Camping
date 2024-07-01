Camping Planner
—------------------------------------------------------------------------------------------------------------------


Project description
This project aims to create a camping website in Morocco. The user will select his departure city, arrival point, and the website will automatically generate a list of routes traversing campsites. The user can also opt for example, for highly rated camps only, or choosing only a three hour drive between successive campsites, or to have at least a viable backup camp for each waypoint… And the algorithm should take of that.

Status update
I’ve created the main landing page. The website is by default a one page website - that could change in the future.
I’ve elected to use React, React-leaflet, React-leaflet-routing, Bootstrap for frontend and python for the backend. This is because I am planning to include some AI magic in the future; besides the database that I’ve got.

Here is a look at my current page: 

After inputting the cities:

Please note that this does not show some of the other features of this website:
Route planner is in the final stages, which will show all possible itineraries (like google maps)
Round trip Checkbox not present
Other options hidden


Progress:
I have just had the idea to create a camping website the previous week, and had to take some days to effectively plan my website. But now, my roadmap is clear, and even if the website is in its infant steps, it will grow very rapidly !
Progress (as of now) 3/10
Moved to another idea, planned the website, laid the backbone of the website
Choosing cities, route planner, camping algorithm
AI camping algorithm, advanced options, debugging….


Update 1: 28/06/24
Now, the itinerary feature is fully working. After feeding multiple waypoints (departure city, camps…), we can accurately plan a route !



Update 2: 28/06/2024
Added itinerary stops. The following screenshot shows a stop in “Sidi Slimane”.



Update 3: 28/06/2024
Example of automatic itinerary planning: (Note data insufficient for any better routes)


Update 4: 01/07/24
Added itinerary summary as well as camp actions.



Challenges:
The Most Difficult Part: Creating the AI-Powered Camping Route Planner
The most challenging aspect of developing the camping website lies in the creation of the AI-powered camping route planner. This feature is pivotal because it not only determines the routes between departure and arrival points but also integrates multiple complex factors to generate optimal camping itineraries. The core difficulties can be broken down into several key areas:
1. Dynamic Route Generation:
Unlike static route generation, which merely finds the shortest path between two points, dynamic route generation needs to consider multiple waypoints (campsites) while adhering to user preferences such as highly rated campsites or specific travel times between stops. Implementing an algorithm that can efficiently calculate these routes in real-time, considering the vast number of possible combinations, is a complex task.
2. User Preferences Integration:
Users can customize their itineraries based on various parameters like campsite ratings, travel time between campsites, and backup options. These preferences add layers of complexity to the algorithm. For instance, ensuring that every main campsite has a viable backup involves additional computations and data management. The system must balance between optimal routing and user preferences, often requiring compromises and intelligent decision-making.
3. AI Integration:
Incorporating AI to enhance the route planning involves training models on historical data, user feedback, and other relevant datasets to predict and suggest the best possible routes and campsites. This AI component needs to learn and adapt to user behaviors and preferences over time, which requires a robust machine learning pipeline and continuous model training and validation.
4. Performance Optimization:
Given the potentially large dataset of campsites and routes, ensuring that the algorithm performs efficiently and provides quick responses is critical. This involves optimizing both the backend computations and the frontend interactions to handle large volumes of data without significant delays.
5. User Interface and Experience:
Presenting the generated routes and options in an intuitive and user-friendly manner is another significant challenge. Users should be able to easily input their preferences, understand the generated routes, and make adjustments as needed. This requires a seamless integration between the backend algorithm and the frontend UI components.
In summary, the most difficult part of the project is developing an AI-powered camping route planner that can dynamically generate optimized routes based on user preferences, integrate AI predictions, and maintain high performance and usability. This requires advanced algorithm design, machine learning expertise, and a deep understanding of user experience design.
