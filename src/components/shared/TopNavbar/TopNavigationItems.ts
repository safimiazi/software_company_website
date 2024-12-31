export interface ITopNavigationItems {
    name: string;
    path: string | "/";
    children?: ITopNavigationItems[];
  }
  export const TopNavigationItems: ITopNavigationItems[] = [
    {
      name: "About",
      path: "/about/about_JHS",
      children: [
        {
          name: "JHS",
          path: "/about/about_JHS",
        },
        {
          name: "Our Senior pastors",
          path: "/about/our_senior_pastor",
        },
        {
          name: "Ministerial team",
          path: "/about/ministerial_team",
        },
        {
          name: "Our Values",
          path: "/our_values",
        },
        {
          name: "Contact Us",
          path: "/about/contactUs",
        },
      ],
    },
    {
      name: "Sermons",
      path: "/sermons",
    },
    {
      name: "Minitries",
      path: "/minitries/children_ministry",
      children: [
        {
          name: "Children",
          path: "/minitries/children_ministry",
        },
        {
          name: "Young Adults",
          path: "/minitries/young_adults",
        },
        {
          name: "MEN",
          path: "/minitries/men_ministry",
        },
        {
          name: "Women",
          path: "/minitries/women_ministry",
        },
      ],
    },
    {
      name: "Get Involved",
      path: "/get_involved",
      children: [
        // {
        //   name: "Involved",
        //   path: "/get_involved",
        // },
        {
          name: "Become a new Believers",
          path: "/get_involved/become_a_new_believers",
        },
        {
          name: "Become a Jhs Worker",
          path: "/get_involved/become_a_jhs_worker",
        },
        {
          name: "Outreach Programs",
          path: "/get_involved/outreach_programs",
        },
      ],
    },
    {
      name: "Events",
      path: "/events",
    },
    {
      name: "Membership",
      path: "/membership",
    },
  ];
  
  export interface ISideNavigation {
    name: string;
    path?: string;
    children?: ISideNavigation[];
  }
  
  export const sideNavigation: ISideNavigation[] = [
    {
      name: "About",
      // path: "/about/about_JHS",
      children: [
        {
          name: "JHS",
          path: "/about/about_JHS",
        },
        {
          name: "Our Senior pastors",
          path: "/about/our_senior_pastor",
        },
        {
          name: "Ministerial team",
          path: "/about/ministerial_team",
        },
        {
          name: "Our Values",
          path: "/our_values",
        },
        {
          name: "Contact Us",
          path: "/about/contactUs",
        },
      ],
    },
    {
      name: "Sermons",
      path: "/sermons",
    },
    {
      name: "Minitries",
      // path: "/minitries/children_ministry",
      children: [
        {
          name: "Children",
          path: "/minitries/children_ministry",
        },
        {
          name: "Young Adults",
          path: "/minitries/young_adults",
        },
        {
          name: "MEN",
          path: "/minitries/men_ministry",
        },
        {
          name: "Women",
          path: "/minitries/women_ministry",
        },
      ],
    },
    {
      name: "Events",
      path: "/events",
    },
    {
      name: "Membership",
      path: "/membership",
    },
    {
      name: "Get Involved",
      // path: "/get_involved",
      children: [
        {
          name: "Involved",
          path: "/get_involved",
        },
        {
          name: "New Believers",
          path: "/get_involved/become_a_new_believers",
        },
        {
          name: "Outreach Programs",
          path: "/get_involved/outreach_programs",
        },
      ],
    },
    {
      name: "Resources",
      // path: "/building_project",
      children: [
        {
          name: "Building Project",
          path: "/building_project",
        },
      ],
    },
  ];
  