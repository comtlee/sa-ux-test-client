const getCount = (eventData, text) => {
  const eventList = eventData.map((data) => {
    if (text === "site") {
      return data;
    } else if (text === "key") {
      return JSON.parse(data.context);
    } else {
      return JSON.parse(data.tag);
    }
  });

  const eventCounts = eventList.reduce((name, count) => {
    name[count] = (name[count] || 0) + 1;
    return name;
  }, {});

  const eventKeys = Object.keys(eventCounts);
  const eventValues = Object.values(eventCounts);

  return [eventKeys, eventValues];
};

export default getCount;
