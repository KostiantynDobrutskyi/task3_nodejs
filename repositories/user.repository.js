const editData = (data) => {
    if (data) {
        console.log(`Fighter ${data.name} with id:${data._id} edited`);
        return true;
    } else {
        return false;
    }
};

const removeData = (data) => {
    if (data) {
        console.log(`Fighter ${data.name} with id:${data._id} remove`);
        return true;
    } else {
        return false;
    }
};

const addData = (data) => {
    if (data) {
        console.log(`Fighter ${data.name} with id:${data._id} added`);
        return true;
    } else {
        return false;
    }
};


module.exports = {
    editData,
    removeData,
    addData
};