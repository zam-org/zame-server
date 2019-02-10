import m from "mithril";

const About = {
    view() {
        return m("div", [
            m("p", "Welcome to ZAME!"),
            m("p", "ZAME is a game based on ZeroNet."),
            m("p", "Check out the source code ", 
                m("a", {href: "https://github.com/anoadragon453/zame-server"}, "here"),
                "!"
            ),
        ]);
    },
};

export default About;
