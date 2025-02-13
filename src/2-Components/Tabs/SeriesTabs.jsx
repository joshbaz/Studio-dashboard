import React from "react";
import AudienceTab from "./AudienceTab";
import ThumbnailTab from "./ThumbnailTab";
import TrailerTab from "./TrailerTab";
import ContentTab from "./ContentTab";
import SeasonsListTable from "../Tables/SeasonsListTable";
import { Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";

const displayTabs = [
  {
    title: "Seasons/Segments",
    position: "1",
  },
  {
    title: "Content Details",
    position: "2",
  },
  {
    title: "Audience, Visibility",
    position: "3",
  },
  {
    title: "Thumbnails & Backdrops",
    position: "4",
  },
  {
    title: "Trailer",
    position: "5",
  },
];

const displayUpcomingFilms = [
  {
    title: "Content Details",
    position: "1",
  },
  {
    title: "Audience, Visibility",
    position: "2",
  },
  {
    title: "Thumbnails & Backdrops",
    position: "3",
  },
];

const SeriesTabs = ({ film, handleNewSeason, type }) => {
  const [currentTabValue, setCurrentTabValue] = React.useState("1");

  const handleTabChange = (event, newValue) => {
    setCurrentTabValue(() => newValue);
  };

  const TabDisplay = (datakey) => {
    switch (datakey) {
      case "Seasons/Segments":
        return (
          <SeasonsListTable film={film} handleNewSeason={handleNewSeason} />
        );
      case "Content Details":
        return <ContentTab film={film} />;
      case "Audience, Visibility":
        return <AudienceTab film={film} />;
      case "Thumbnails & Backdrops":
        return <ThumbnailTab film={film} type={type ? type : "film"} />;
      case "Trailer":
        return <TrailerTab film={film} type={type} />;
      default:
        break;
    }
  };
  return (
    <div className="min-h-[60vh]">
      {film?.visibility !== "coming soon" ? (
        <>
          {displayTabs?.length > 0 && (
            <TabContext value={currentTabValue !== null && currentTabValue}>
              <div className="flex flex-col justify-end space-x-5    p-0 box-border bg-transparent relative">
                <hr className=" absolute -bottom-0 h-[1px] border-[transparent]  border-b-[0.1px] border-b-[#ee5170]   w-full z-10" />
                <Tabs
                  value={currentTabValue !== null && currentTabValue}
                  onChange={handleTabChange}
                  indicatorColor=""
                  sx={{ margin: "0px" }}
                >
                  {displayTabs.map((data) => {
                    return (
                      <Tab
                        className={`  font-[Inter-Regular] ${
                          currentTabValue !== null &&
                          currentTabValue === data.position
                            ? "!scale-100 text-whites-50 !border-b-2 !border-b-transparent z-40"
                            : "scale-75 text-primary-500 text-opacity-75"
                        }  translate-y-2 text-sm mx-2`}
                        key={data.position}
                        value={data.position}
                        label={data.title}
                        sx={
                          currentTabValue !== null &&
                          currentTabValue === data.position
                            ? {
                                border: "2px solid #ee5070 !important",
                                backgroundColor: "#24222a",
                                borderBottom: "0px !important",
                                borderTopLeftRadius: "10px",
                                borderTopRightRadius: "10px",
                              }
                            : {
                                border: "1px solid #424148 !important",
                                borderBottom: "0px",
                                borderTopLeftRadius: "10px",
                                borderTopRightRadius: "10px",
                              }
                        }
                      />
                    );
                  })}
                </Tabs>
              </div>

              {displayTabs.map((data) => {
                return (
                  <TabPanel key={data.position} value={data.position}>
                    {TabDisplay(data.title)}
                  </TabPanel>
                );
              })}
            </TabContext>
          )}
        </>
      ) : (
        <>
          {displayUpcomingFilms?.length > 0 && (
            <TabContext value={currentTabValue !== null && currentTabValue}>
              <div className="flex flex-col justify-end space-x-5    p-0 box-border bg-transparent relative">
                <hr className=" absolute -bottom-0 h-[1px] border-[transparent]  border-b-[0.1px] border-b-[#ee5170]   w-full z-10" />
                <Tabs
                  value={currentTabValue !== null && currentTabValue}
                  onChange={handleTabChange}
                  indicatorColor=""
                  sx={{ margin: "0px" }}
                >
                  {displayUpcomingFilms.map((data) => {
                    return (
                      <Tab
                        className={`  font-[Inter-Regular] ${
                          currentTabValue !== null &&
                          currentTabValue === data.position
                            ? "!scale-100 text-whites-50 !border-b-2 !border-b-transparent z-40"
                            : "scale-75 text-primary-500 text-opacity-75"
                        }  translate-y-2 text-sm mx-2`}
                        key={data.position}
                        value={data.position}
                        label={data.title}
                        sx={
                          currentTabValue !== null &&
                          currentTabValue === data.position
                            ? {
                                border: "2px solid #ee5070 !important",
                                backgroundColor: "#24222a",
                                borderBottom: "0px !important",
                                borderTopLeftRadius: "10px",
                                borderTopRightRadius: "10px",
                              }
                            : {
                                border: "1px solid #424148 !important",
                                borderBottom: "0px",
                                borderTopLeftRadius: "10px",
                                borderTopRightRadius: "10px",
                              }
                        }
                      />
                    );
                  })}
                </Tabs>
              </div>

              {displayUpcomingFilms.map((data) => {
                return (
                  <TabPanel key={data.position} value={data.position}>
                    {TabDisplay(data.title)}
                  </TabPanel>
                );
              })}
            </TabContext>
          )}
        </>
      )}
    </div>
  );
};

export default SeriesTabs;
