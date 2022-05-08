// API

function getData() {
  let promise = fetch(
    "http://universities.hipolabs.com/search?country=United+Kingdom"
  );

  return promise;
  // console.log(data);
}

function showUniversities(universityData) {
  let layoutUniversity = "";

  universityData.forEach(function (obj, index) {
    let name = obj.name;
    let domains = obj.domains;
    let domainsLayout = "";
    domains.forEach(function (domain, domainIndex) {
      domainsLayout += `<li>${domain}</li>`;
    });

    layoutUniversity += `   
    <div> 
    <h2>${name}</h2>
    <ul>${domainsLayout}</ul>
    </div>
    `;
  });
  document.getElementById("placeholder").innerHTML = layoutUniversity;
}

async function run() {
  let universityList = await (await getData()).json();
  showUniversities(universityList);
}
run();
