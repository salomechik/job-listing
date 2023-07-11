import data from "./data.json" assert { type: "json" };

const info = document.querySelector(".info");

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
  let container
 
  const infoFirst = createDomElement("div", "info-box");
  const firstChild = createDomElement("div", "first-child");
  const firstFirstChild = createDomElement("div", "first-first-child");
  const wen = createDomElement("h3", "new");
  const firstSecondChild = createDomElement("div", "first-second-child");
  const SecondChild = createDomElement("div", "second-child");
  const Title = createDomElement("h1", "title", position);
  const ThirdChild = createDomElement("div", "third-child");
  const posted = createDomElement("h3", "posted", postedAt);
  const information = createDomElement("h3", "contract", contract);
  const where = createDomElement("h3", "location", location);
  const line = createDomElement("hr", "line");
  const iconElement = createDomElement("img", "logo", logo);
  const infoCompany = createDomElement("h3", "info-company");
  const box = createDomElement("h3", "box", tools);
  const levelBox = createDomElement("h3", "level", level);
  const roleBox = createDomElement("h3", "role", role);
  const fourthChild = createDomElement("div", "fourth-child")
  for (let i = 0; i < data[index].languages.length; i ++){
    container = createDomElement("h3", "container", languages);
    container.textContent = languages;
  };
  infoCompany.textContent = company;
  Title.textContent = position;
  wen.textContent = Wen;
  posted.textContent = postedAt;
  information.textContent = contract;
  where.textContent = location;
  container.textContent = languages;
  box.textContent = tools;
  levelBox.textContent = level;
  roleBox.textContent = role;

  info.append(infoFirst);

  infoFirst.append(firstChild);
  infoFirst.append(SecondChild);
  infoFirst.append(ThirdChild);
  infoFirst.append(line);
  infoFirst.append(iconElement);
 
  infoFirst.append(levelBox);
  infoFirst.append(roleBox);
  infoFirst.append(fourthChild);

  firstChild.append(infoCompany);
  firstChild.append(firstFirstChild);
  firstChild.append(firstSecondChild);

  firstFirstChild.append(wen)

  SecondChild.append(Title);

  ThirdChild.append(posted)
  ThirdChild.append(information);
  ThirdChild.append(where);

  fourthChild.append(box);
  fourthChild.append(levelBox);
  fourthChild.append(roleBox);
  fourthChild.append(container);

  if (featured) {
    infoFirst.style.borderLeft = "5px solid #5CA5A5";
  };


//   if (new) {
//     new.style.display = "none"
//  } else {
//      new.style.display = "block"
//  }; 

}
