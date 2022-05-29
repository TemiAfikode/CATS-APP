const baseUrl = "http://localhost:4000";
const fetchHeaders = {
    headers: {
        "Content-Type": "application/json",
    },
};

const getFormData = () => {
    const name = document.querySelector("#name").value;
    const breed = document.querySelector("#breed").value;
    const description = document.querySelector("#description").value;
    const size = document.querySelector("#size").value;
    const coat = document.querySelector("#coat").value;
    const colour = document.querySelector("#colour").value;
    const imageLink = document.querySelector("#imageLink").value;

    return {
        name,
        breed,
        description,
        size,
        coat,
        colour,
        imageLink,
    };
};

const createCat = async() => {
    const createdCat = await fetch("/api/cats/add", {
        ...fetchHeaders,
        method: "POST",
        body: JSON.stringify(getFormData()),
    });

    if (createdCat.status === 201) window.location.replace(document.referrer);
    else window.location.replace(`${baseUrl}/error`);
};

const updateCatDetails = async(catId) => {
    const updatedCat = await fetch(`/api/breed/${catId}`, {
        ...fetchHeaders,
        method: "PUT",
        body: JSON.stringify(getFormData()),
    });

    if (updatedCat.status === 202) window.location.replace(document.referrer);
    else window.location.replace(`${baseUrl}/error`);
};

const deleteCat = async(catId) => {
    const deletedCat = await fetch(`/api/breed/${catId}`, {...fetchHeaders, method: "DELETE" });

    if (deletedCat.status === 203) window.location.replace(`${baseUrl}/breeds`);
    else window.location.replace("http://localhost:4000/error");
};