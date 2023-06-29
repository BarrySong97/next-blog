"use client";
import "react-virtualized/styles.css";
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
} from "react-virtualized";
import ImageMeasurer from "react-virtualized-image-measurer";
const columnWidth = 200;
const defaultHeight = 250;
const defaultWidth = columnWidth;
const list = [
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-647727888-master-1506626232.jpg",
    title: "QUIZ: Has Reese Witherspoon Smooched These Guys On-Screen?",
  },
  {
    image:
      "https://ichef-1.bbci.co.uk/news/320/cpsprodpb/97BE/production/_98064883_ikea.jpg",
    title: "Ikea buys odd jobs firm TaskRabbit",
  },
  {
    image:
      "https://cdn.theatlantic.com/assets/media/img/mt/2017/09/ra_3000x3000-4/facebook.jpg",
    title: "Radio Atlantic: Russia! Live with Julia Ioffe and Eliot A. Cohen",
  },
  {
    image: "https://i.redd.it/th5enkjgumoz.jpg",
    title: "Bar",
  },
  {
    image: "https://imgur.com/lvK8Faf.jpg",
    title:
      "'Cancer patient' finds lump was toy traffic cone inhaled in 1977 | UK news",
  },
  {
    image: "https://i.imgur.com/e89Pb8j.gif",
    title: "It's cool bro, I got this",
  },
  {
    image: "https://i.redd.it/336erdiy5moz.jpg",
    title: "Reddit",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/img-5675-jpg-1506621753.jpg",
    title:
      "Prepare to Geek Out Over This Adorable Game of Thrones Wedding Shower",
  },
  {
    image:
      "https://venturebeat.com/wp-content/uploads/2017/03/ShopChat-e1506572472915.jpg",
    title: "Effective chatbots master conversational size and fit",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-647727888-master-1506626232.jpg",
    title: "QUIZ: Has Reese Witherspoon Smooched These Guys On-Screen?",
  },
  {
    image:
      "https://ichef-1.bbci.co.uk/news/320/cpsprodpb/97BE/production/_98064883_ikea.jpg",
    title: "Ikea buys odd jobs firm TaskRabbit",
  },
  {
    image:
      "https://cdn.theatlantic.com/assets/media/img/mt/2017/09/ra_3000x3000-4/facebook.jpg",
    title: "Radio Atlantic: Russia! Live with Julia Ioffe and Eliot A. Cohen",
  },
  {
    image: "https://i.redd.it/th5enkjgumoz.jpg",
    title: "Bar",
  },
  {
    image: "https://i.imgur.com/HjgUCHF.png",
    title:
      "'Cancer patient' finds lump was toy traffic cone inhaled in 1977 | UK news",
  },
  {
    image: "https://i.imgur.com/e89Pb8j.gif",
    title: "It's cool bro, I got this",
  },
  {
    image: "https://i.redd.it/336erdiy5moz.jpg?4",
    title: "Reddit",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/img-5675-jpg-1506621753.jpg",
    title:
      "Prepare to Geek Out Over This Adorable Game of Thrones Wedding Shower",
  },
  {
    image:
      "https://venturebeat.com/wp-content/uploads/2017/03/ShopChat-e1506572472915.jpg",
    title: "Effective chatbots master conversational size and fit",
  },
];
// Array of images with captions
//const list = [{image: 'http://...', title: 'Foo'}];

// We need to make sure images are loaded from scratch every time for this demo
const noCacheList = list.map((item, index) => ({
  title: index + ". " + item.title,
  image: item.image + (item.image ? "?noCache=" + Math.random() : ""),
}));

const keyMapper = (item, index) => item.src || index;

// Default sizes help Masonry decide how many images to batch-measure
const cache = new CellMeasurerCache({
  defaultHeight,
  defaultWidth,
  fixedWidth: true,
});

// Our masonry layout will use 3 columns with a 10px gutter between
const cellPositionerConfig = {
  cellMeasurerCache: cache,
  columnCount: 1,
  columnWidth,
  spacer: 10,
};

const cellPositioner = createMasonryCellPositioner(cellPositionerConfig);

const MasonryComponent = ({ itemsWithSizes, setRef }) => {
  const cellRenderer = ({ index, key, parent, style }) => {
    const { item, size } = itemsWithSizes[index];
    const height = columnWidth * (size.height / size.width) || defaultHeight;

    return (
      <CellMeasurer cache={cache} index={index} key={key} parent={parent}>
        <div style={style}>
          {item.src && (
            <img
              src={item.src}
              style={{
                height: height,
                width: columnWidth,
                display: "block",
              }}
            />
          )}
        </div>
      </CellMeasurer>
    );
  };

  return (
    <Masonry
      cellCount={itemsWithSizes.length}
      cellMeasurerCache={cache}
      cellPositioner={cellPositioner}
      cellRenderer={cellRenderer}
      height={600}
      width={800}
      keyMapper={keyMapper}
      ref={setRef}
    />
  );
};
export default function Home() {
  const imgs = [
    {
      src: "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1673757121315-e7f427f1d378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1687428959667-369ef891658a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1685821935645-92a918ca51b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1685648043756-124a4adad0ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
  ];
  return (
    <main className="">
      <h2 className="text-2xl font-bold mb-1">照片</h2>
      <p className="text-stone-400 text-xs">记录，过去的痕迹，瞬间。</p>
      <section style={{ height: 800 }}>
        <ImageMeasurer
          items={imgs}
          image={(item) => item.src}
          keyMapper={keyMapper}
          onError={(error, item, src) => {
            console.error(
              "Cannot load image",
              src,
              "for item",
              item,
              "error",
              error
            );
          }}
          defaultHeight={defaultHeight}
          defaultWidth={defaultWidth}
        >
          {({ itemsWithSizes }) => (
            <MasonryComponent itemsWithSizes={itemsWithSizes} />
          )}
        </ImageMeasurer>
      </section>
    </main>
  );
}
