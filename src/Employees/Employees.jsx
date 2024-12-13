const Employees = [
    {
      "id": 1,
      "name": "John Doe",
      "role": "Software Engineer",
      "email": "john.doe@example.com",
      "address": {
        "street": "123 Main St",
        "city": "San Francisco",
        "state": "CA",
        "zip": "94101",
        "src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.930693166329!2d-122.39699592444929!3d37.79166397198111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806460081965%3A0x2d306f789e9b77c9!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sin!4v1734043767911!5m2!1sen!2sin" 
      },
      "photo": "https://th.bing.com/th/id/OIP.QjynegEfQVPq5kIEuX9fWQHaFj?rs=1&pid=ImgDetMain",
      "jobDescription": "John is a skilled Software Engineer responsible for developing and maintaining web applications. He collaborates with cross-functional teams to deliver high-quality software solutions."
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "role": "Product Manager",
      "email": "jane.smith@example.com",
      "address": {
        "street": "456 Market St",
        "city": "San Francisco",
        "state": "CA",
        "zip": "94105",
        "src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9441561542917!2d-122.40152992444928!3d37.791348471981266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580624981c5f5%3A0xbb481aae0468c7ad!2s456%20Market%20St%2C%20San%20Francisco%2C%20CA%2094111%2C%20USA!5e0!3m2!1sen!2sin!4v1734043874623!5m2!1sen!2sin"
      },
      "photo": "https://www.stereofox.com/wp-content/uploads/2020/02/397abf6ef7a25f6521ec9a1decbedfd6f1a073ad.jpg",
      "jobDescription": "Jane is a dedicated Product Manager who oversees the development and launch of new products. She ensures that the products meet customer needs and align with the company's goals."
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "role": "UX Designer",
      "email": "alice.johnson@example.com",
      "address": {
        "street": "789 Broadway",
        "city": "New York",
        "state": "NY",
        "zip": "10003",
        "src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3609738377777!2d-73.99438892429319!3d40.73208197139062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259997882134d%3A0x21120a313492def9!2s787-789%20Broadway%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2sin!4v1734044668795!5m2!1sen!2sin"
      },
      "photo": "https://th.bing.com/th/id/OIP.dOZnV-I4JAGorCjpqi4MeQHaHa?w=543&h=543&rs=1&pid=ImgDetMain",
      "jobDescription": "Alice is a creative UX Designer who focuses on enhancing user experiences. She designs intuitive interfaces and conducts user research to improve product usability."
    },
    {
      "id": 4,
      "name": "Bob Brown",
      "role": "DevOps Engineer",
      "email": "bob.brown@example.com",
      "address": {
        "street": "101 First Ave S",
        "city": "Seattle",
        "state": "WA",
        "zip": "98101",
        "src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.2616805430243!2d-122.33935071348745!3d47.601601196903246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906abaad78443f%3A0x3bd6bb9d2c31e35c!2s101%201st%20Ave%20S%2C%20Seattle%2C%20WA%2098104%2C%20USA!5e0!3m2!1sen!2sin!4v1734044869418!5m2!1sen!2sin"
      },
      "photo": "https://www.nme.com/wp-content/uploads/2016/09/thumbnail_BEN-LOVETT-1.jpg",
      "jobDescription": "Bob is a proficient DevOps Engineer who automates and optimizes development processes. He ensures the reliability and scalability of the company's infrastructure."
    },
    {
      "id": 5,
      "name": "Carol White",
      "role": "QA Engineer",
      "email": "carol.white@example.com",
      "address": {
        "street": "202 W Second St",
        "city": "Austin",
        "state": "TX",
        "zip": "73301",
        "src":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.0218346065253!2d-97.7482799248024!3d30.264959074813277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b508a2794493%3A0x2af8cbd4aa56a284!2s202%20W%202nd%20St%2C%20Austin%2C%20TX%2078701%2C%20USA!5e0!3m2!1sen!2sin!4v1734045034766!5m2!1sen!2sin" 
      },
      "photo": "https://get.pxhere.com/photo/People-in-nature-hair-face-facial-expression-head-sky-smile-beauty-grass-yellow-happy-fun-sunlight-tree-leaf-human-eye-photography-hand-laugh-adaptation-plant-autumn-brown-hair-portrait-portrait-photography-gesture-1504157.jpg",
      "jobDescription": "Carol is a meticulous QA Engineer who tests and validates software to ensure quality. She identifies and reports bugs, ensuring that products meet high standards."
    },
    {
      "id": 6,
      "name": "David Green",
      "role": "Data Scientist",
      "email": "david.green@example.com",
      "address": {
        "street": "Mc 3rd",
        "city": "Chicago",
        "state": "IL",
        "zip": "60601",
        "src":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.739480299903!2d-87.61908892423106!3d41.8554339712442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2b7f81a83f1b%3A0x2d141cb527dee124!2sMc%203rd%2C%20Chicago%2C%20IL%2060616%2C%20USA!5e0!3m2!1sen!2sin!4v1734045157502!5m2!1sen!2sin" 
      },
      "photo": "https://i1.rgstatic.net/ii/profile.image/273521502846987-1442224016380_Q512/Fredrik-Petersson-2.jpg",
      "jobDescription": "David is an analytical Data Scientist who extracts insights from data. He uses statistical methods and machine learning to inform business decisions."
    },
    {
      "id": 7,
      "name": "Eva Blue",
      "role": "Marketing Specialist",
      "email": "eva.blue@example.com",
      "address": {
        "street": "404 Fourth St",
        "city": "Los Angeles",
        "state": "CA",
        "zip": "90001",
        "src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.762566928741!2d-118.25350282463349!3d34.04996117315796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c64b691f7bf1%3A0x12a05cbc97ac7d73!2s404%204th%20St%2C%20Los%20Angeles%2C%20CA%2090013%2C%20USA!5e0!3m2!1sen!2sin!4v1734045258108!5m2!1sen!2sin" 
      },
      "photo": "https://th.bing.com/th/id/OIP.vzMT75rSJLufKUe6Z5kUuwHaE-?w=700&h=470&rs=1&pid=ImgDetMain",
      "jobDescription": "Eva is a dynamic Marketing Specialist who develops and executes marketing strategies. She focuses on increasing brand awareness and driving customer engagement."
    },
    {
      "id": 8,
      "name": "Frank Black",
      "role": "HR Manager",
      "email": "frank.black@example.com",
      "address": {
        "street": "505 Fifth St",
        "city": "Houston",
        "state": "TX",
        "zip": "77001",
        "src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.919834528489!2d-95.39518792482275!3d29.779959475057876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8a9b98d479f%3A0x9e9b6a52c4b0b839!2s505%20E%205th%20St%2C%20Houston%2C%20TX%2077007%2C%20USA!5e0!3m2!1sen!2sin!4v1734045351343!5m2!1sen!2sin" 
      },
      "photo": "https://aalbc.com/author-photos/Fred-W-Kennedy.jpg",
      "jobDescription": "Frank is an experienced HR Manager who oversees recruitment and employee relations. He ensures a positive work environment and supports employee development."
    },
    {
      "id": 9,
      "name": "Grace Yellow",
      "role": "Business Analyst",
      "email": "grace.yellow@example.com",
      "address": {
        "street": "606 Sixth St",
        "city": "Phoenix",
        "state": "AZ",
        "zip": "85001",
        "src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425345.6118331953!2d-112.45470655073223!3d33.604977740299965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20AZ%2C%20USA!5e0!3m2!1sen!2sin!4v1734045415020!5m2!1sen!2sin"
      },
      "photo": "https://th.bing.com/th/id/OIP.osDlLqhRgfUVw8FJnHn6sQAAAA?w=290&h=400&rs=1&pid=ImgDetMain",
      "jobDescription": "Grace is a strategic Business Analyst who analyzes business processes and systems. She provides insights and recommendations to improve efficiency and effectiveness."
    },
    {
      "id": 10,
      "name": "Henry White",
      "role": "Frontend Developer",
      "email": "henry.white@example.com",
      "address": {
        "street": "707 Seventh St",
        "city": "Philadelphia",
        "state": "PA",
        "zip": "19101",
        "src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.013751433685!2d-75.15656302433617!3d39.9410820715201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c89e2590a20f%3A0xe06fe3d39068d72b!2s707%20S%207th%20St%2C%20Philadelphia%2C%20PA%2019147%2C%20USA!5e0!3m2!1sen!2sin!4v1734045507311!5m2!1sen!2sin"
      },
      "photo": "https://i.pinimg.com/736x/ed/8b/cc/ed8bcca34bf31e5d7cd14c100bd4c27e.jpg",
      "jobDescription": "Henry is a talented Frontend Developer who creates responsive and interactive web applications. He collaborates with designers and backend developers to deliver seamless user experiences."
    }
  ]

export default Employees