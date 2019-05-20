const express = require("express"),
  http = require("http"),
  path = require("path"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser"),
  static = require("serve-static"),
  expressErrorHandler = require("express-error-handler"),
  expressSession = require("express-session"),
  listRouter = require("./list").listRouter,
  categoryRouter = require("./category").categoryRouter;
var app = express();
var router = express.Router();
const port = 10101;
app.use(cors());
app.set("port", process.env.PORT || port);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/fonts", express.static(__dirname + "/public/fonts"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());
app.use("/", router);
app.use("/list", listRouter);
app.use("/category", categoryRouter);
app.all("/", function(req, res) {
  res.redirect("index");
});

router.route("/index").all(function(req, res) {
  res.render("index", {});
});
router.route("/apiTest").all(function(req, res) {
    console.log("get: "+req);
  res.json({
    items: [
      {
        id: 2,
        title: "bigbuckbunny",
        event: {
          id: 1,
          title: "event title",
          poster:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
          category: 1
        }
      },
      {
        id: 3,
        title: "bigbuckbunny3",
        event: {
          id: 1,
          title: "event title",
          poster:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
          category: 1
        }
      },
      {
        id: 4,
        title: "bigbuckbunny4",
        event: {
          id: 1,
          title: "event title",
          poster:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
          category: 1
        }
      },
      {
        id: 5,
        title: "bigbuckbunny5",
        event: {
          id: 1,
          title: "event title",
          poster:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
          category: 1
        }
      },
      {
        id: 6,
        title: "bigbuckbunny6",
        event: {
          id: 1,
          title: "event title",
          poster:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
          category: 1
        }
      },
      {
        id: 7,
        title: "bigbuckbunny6",
        event: {
          id: 1,
          title: "event title",
          poster:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
          category: 1
        }
      },
    ]
  });
});
http.createServer(app).listen(app.get("port"), function() {
  console.log("server start : " + app.get("port"));
});
