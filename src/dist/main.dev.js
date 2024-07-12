"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _App = _interopRequireDefault(require("./App.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = new _App["default"]({
  target: document.body,
  props: {
    system: {
      headerTitle: "Photoshop Tutorial"
    },
    videoList: [{
      heart: false,
      name: "mark",
      img: "https://i.pinimg.com/736x/36/46/79/364679f2ce6ba05c78649ed8f491e48f.jpg",
      id: 1
    }, {
      heart: false,
      name: "joe",
      img: "https://i.pinimg.com/736x/36/46/79/364679f2ce6ba05c78649ed8f491e48f.jpg",
      id: 2
    }, {
      heart: false,
      name: "ron",
      img: "https://i.pinimg.com/736x/36/46/79/364679f2ce6ba05c78649ed8f491e48f.jpg",
      id: 3
    }, {
      heart: false,
      name: "harold",
      img: "https://i.pinimg.com/736x/36/46/79/364679f2ce6ba05c78649ed8f491e48f.jpg",
      id: 3
    }, {
      heart: false,
      name: "mark",
      img: "https://i.pinimg.com/736x/36/46/79/364679f2ce6ba05c78649ed8f491e48f.jpg",
      id: 1
    }, {
      heart: false,
      name: "mark",
      img: "https://i.pinimg.com/736x/36/46/79/364679f2ce6ba05c78649ed8f491e48f.jpg",
      id: 1
    }, {
      heart: false,
      name: "joe",
      img: "https://i.pinimg.com/736x/36/46/79/364679f2ce6ba05c78649ed8f491e48f.jpg",
      id: 2
    }, {
      heart: false,
      name: "ron",
      img: "https://i.pinimg.com/736x/36/46/79/364679f2ce6ba05c78649ed8f491e48f.jpg",
      id: 3
    }, {
      heart: false,
      name: "harold",
      img: "https://i.pinimg.com/736x/36/46/79/364679f2ce6ba05c78649ed8f491e48f.jpg",
      id: 3
    }, {
      heart: true,
      name: "ggggg",
      img: "https://i.pinimg.com/736x/36/46/79/364679f2ce6ba05c78649ed8f491e48f.jpg",
      id: 1
    }],
    headerContext: ["Unlock Your Photoshop Potential: Tips, Tricks, and Tutorials!", "Master Photoshop: Easy Tricks for Stunning Designs!", "Level Up Your Design Skills with Expert Photoshop Tutorials!", "Transform Your Creativity: Photoshop Tips and Tricks!", "Discover Pro-Level Photoshop Techniques for Free!", "Boost Your Design Game with Our Photoshop Guides!", "Become a Photoshop Pro: Quick and Easy Tutorials!", "Elevate Your Graphics with Our Top Photoshop Tips!", "Create Stunning Designs with Simple Photoshop Tricks!", "Your Go-To Source for Photoshop Mastery!", "Unlock Creative Brilliance: Photoshop Tutorials & Tips!", "From Beginner to Pro: Essential Photoshop Tricks!", "Design Like a Pro with Our Photoshop Secrets!", "Photoshop Magic: Tips and Tricks for Every Designer!", "Your Ultimate Guide to Photoshop Mastery!", "Quick Photoshop Hacks for Impressive Designs!", "Get Creative: Photoshop Tips to Elevate Your Skills!", "Expert Photoshop Tips for Stunning Visuals!", "Design Smarter with Our Photoshop Tutorials!", "Photoshop Insights: Learn Tricks from the Pros!"]
  }
});
var _default = app;
exports["default"] = _default;