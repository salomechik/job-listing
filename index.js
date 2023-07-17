import data from "./data.json" assert { type: "json" };

const info = document.querySelector(".info");
const searchBox = document.querySelector(".search-box");
const clear = document.querySelector(".clear");
const mainBox = document.querySelector(".main-box");

const createDomElement = (tag, className, src, id, event, eventFc) => {
  const element = document.createElement(tag);
  element.classList.add(className);

  if (src) {
    element.src = src;
  }
  if (id) {
    element.setAttribute("id", id);
  }
  if (event) {
    element[event] = () => {
      eventFc();
    };
  }
  return element;
};

let filter = [];
let itemBox;
let xBackground;

function filterBox() {
  searchBox.style.display = "flex";
  mainBox.innerHTML = "";
  filter.map((item) => {
    itemBox = createDomElement("div", "item-box");
    itemBox.textContent = item;
    const xStyle = createDomElement(
      "img",
      "xStyle",
      "./images/icon-remove.svg"
    );
    mainBox.append(itemBox);
    xBackground = createDomElement("div", "x-background");
    itemBox.append(xBackground);
    xBackground.append(xStyle);
    searchBox.append(mainBox);
    xBackground.addEventListener("click", (e) => {
      filter = filter.filter((value) => value !== item);
      filterBox();
      displayJobs(dataFilter());
      if (filter.length === 0) {
        searchBox.style.display = "none";
      }
    });
  });
  clear.addEventListener("click", (e) => {
    filter = [];
    filterBox();
    displayJobs(data);
    searchBox.style.display = "none";
  });
}

const displayJobs = (data) => {
  info.innerHTML = "";
  for (let index = 0; index < data.length; index++) {
    const {
      id,
      company,
      logo,
      new: Wen,
      featured,
      position,
      role,
      level,
      postedAt,
      contract,
      location,
      languages,
      tools,
    } = data[index];
    let container;
    let box;
    const infoFirst = createDomElement("div", "info-box");
    const firstChild = createDomElement("div", "first-child");
    const SecondChild = createDomElement("div", "second-child");
    const Title = createDomElement("h1", "title", position);
    const ThirdChild = createDomElement("div", "third-child");
    const posted = createDomElement("h3", "posted", postedAt);
    const information = createDomElement("h3", "contract", contract);
    const where = createDomElement("h3", "location", location);
    const line = createDomElement("hr", "line");
    const iconElement = createDomElement("img", "logo", logo);
    const infoCompany = createDomElement("h3", "info-company");
    const dot = createDomElement("div", "dot");
    const dotSecond = createDomElement("div", "dot-second");
    const levelBox = createDomElement("h3", "level", level);
    const roleBox = createDomElement("h3", "role", role);
    const fourthChild = createDomElement("div", "fourth-child");

    for (let i = 0; i < data[index].languages.length; i++) {
      container = createDomElement("h3", "container", languages);
      container.textContent = languages[i];
      fourthChild.append(container);

      container.addEventListener("click", (e) => {
        if (!filter.includes(e.target.textContent)) {
          filter = [...filter, e.target.textContent];
          filterBox();
          displayJobs(dataFilter());
        }
      });
    }
    for (let e = 0; e < data[index].tools.length; e++) {
      box = createDomElement("h3", "box", tools);
      box.textContent = tools[e];
      fourthChild.append(box);

      box.addEventListener("click", (e) => {
        if (!filter.includes(e.target.textContent)) {
          filter = [...filter, e.target.textContent];
          filterBox();
          displayJobs(dataFilter());
        }
      });
    }

    infoCompany.textContent = company;
    Title.textContent = position;
    posted.textContent = postedAt;
    information.textContent = contract;
    where.textContent = location;

    levelBox.textContent = level;
    roleBox.textContent = role;

    info.append(infoFirst);

    infoFirst.append(firstChild);
    infoFirst.append(SecondChild);
    infoFirst.append(ThirdChild);
    infoFirst.append(line);
    infoFirst.append(iconElement);
    infoFirst.append(fourthChild);

    firstChild.append(infoCompany);

    SecondChild.append(Title);

    ThirdChild.append(posted);
    ThirdChild.append(dot);
    ThirdChild.append(information);
    ThirdChild.append(dotSecond);
    ThirdChild.append(where);

    fourthChild.append(levelBox);
    fourthChild.append(roleBox);

    if (Wen) {
      const wen = createDomElement("h3", "new");
      const firstFirstChild = createDomElement("div", "first-first-child");
      wen.textContent = "new!";
      firstFirstChild.append(wen);
      firstChild.append(firstFirstChild);
    }
    if (featured) {
      infoFirst.style.borderLeft = "5px solid #5CA5A5";
      const featured = createDomElement("h3", "featured");
      const firstSecondChild = createDomElement("div", "first-second-child");
      featured.textContent = "featured";
      firstChild.append(firstSecondChild);
      firstSecondChild.append(featured);
    }

    levelBox.addEventListener("click", () => {
      if (!filter.includes(levelBox.textContent)) {
        filter = [...filter, levelBox.textContent];
        filterBox();
        displayJobs(dataFilter());
      }
    });
    roleBox.addEventListener("click", () => {
      if (!filter.includes(roleBox.textContent)) {
        filter = [...filter, roleBox.textContent];
        filterBox();
        displayJobs(dataFilter());
      }
    });
  }
};

function dataFilter() {
  const filterArray = data.filter((item) => {
    const values = [item.role, item.level, ...item.languages, ...item.tools];
    return filter.every((val) => values.includes(val));
  });
  return filterArray;
}

displayJobs(data);
