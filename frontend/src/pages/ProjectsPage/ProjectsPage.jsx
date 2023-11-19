import BasePageComponent from "../../components/BasePageComponent/BasePageComponent";
import ProjectCardComponent from "../../components/ProjectCard/ProjectCard";

const projects = [
    {
        title: "Dusk Rx: Premium Smart Glasses with Electronic Tint Control",
        content:
            "The First Light and Touch Responsive Prescription-Ready Glasses w Instant Electronic Tint Control. Dusk Rx: The future of Sunglasses.",
        createdBy: "Ampere",
        img: "https://ksr-ugc.imgix.net/assets/042/451/887/04531fdbd7f2aeb1994802c75f304138_original.png?ixlib=rb-4.1.0&crop=faces&w=352&h=198&fit=crop&v=1695742737&auto=format&frame=1&q=92&s=42923cb3eba333271a3a1ac53a194934",
    },
    {
        title: "GENERAL STRIKE: Calexit & Other Tales of The Good Fight",
        content:
            "A comics anthology made by striking WGA writers telling awesome genre stories (with $$ going to the Strike Fund!).",
        createdBy: "Black Mask Special Projects",
        img: "https://ksr-ugc.imgix.net/assets/041/794/710/60cacc986b6fc493236577d232d9966d_original.jpg?ixlib=rb-4.1.0&crop=faces&w=352&h=198&fit=crop&v=1690836852&auto=format&frame=1&q=92&s=2900f4862f8d02b09ebbb86a59868ec0",
    },
    {
        title: "Book NOTA. Vegan ❙ Creativity Multiverse 3.0",
        content:
            "All your needs in one. A notebook organizer with flexible modulating features and magnetic binding technology.",
        createdBy: "ANTOU",
        img: "https://ksr-ugc.imgix.net/assets/042/341/422/05c4b590fb27b81858b7dea9f4e707f9_original.jpg?ixlib=rb-4.1.0&crop=faces&w=352&h=198&fit=crop&v=1695026485&auto=format&frame=1&q=92&s=6c2a63a4be1112804335516c8302e7d8",
    },
    {
        title: "5 Must-See National Parks for your Wrist",
        content:
            "Tell time with moving illustrations that bring to life these five iconic National Park watches, from the creators of Xeric.",
        createdBy: "Asterisk Watches",
        img: "https://ksr-ugc.imgix.net/assets/041/694/515/bea828a2aa05648d53f927ab28999e8e_original.jpg?ixlib=rb-4.1.0&crop=faces&w=352&h=198&fit=crop&v=1689958056&auto=format&frame=1&q=92&s=f1fcbe9aff19b11b3e3b29a47f6da06b",
    },
    {
        title: "Loog Piano",
        content:
            "A portable digital piano for children and grown-ups, with musician-grade sound and design.",
        createdBy: "Rafael Atijas",
        img: "https://ksr-ugc.imgix.net/assets/042/178/341/8de12d30daf31336651bf5c09c46d28d_original.jpg?ixlib=rb-4.1.0&crop=faces&w=352&h=198&fit=crop&v=1693844982&auto=format&frame=1&q=92&s=ed5960bc1d3617fffd5ff547f94f5c07",
    },
    {
        title: "GENKI Alpine Collection: ShadowCast 2 Pro and Covert Dock 2",
        content:
            "🏔️ 4K60 streams with ShadowCast 2 Pro, go portable with ShadowCast 2 & keep down low with Covert Dock 2. Next-gen tech, ❄️ aesthetics.",
        createdBy: "Human Things",
        img: "https://ksr-ugc.imgix.net/assets/042/404/564/eecb0ddc21d1509915fe70536182028c_original.png?ixlib=rb-4.1.0&crop=faces&w=352&h=198&fit=crop&v=1695389373&auto=format&frame=1&q=92&s=53fd6802f9143a164305abff623c447f",
    },
    {
        title: "THE SUMMER IN YOUR BLOOD: A Summer Camp Slasher Comic",
        content:
            "An overnight camp counselor contends with her little brother's breakup and subsequent possession as people begin to turn up dead.",
        createdBy: "Mark Bouchard",
        img: "https://ksr-ugc.imgix.net/assets/042/171/103/7a92e9c933715ee678b3753f86ff157f_original.jpg?ixlib=rb-4.1.0&crop=faces&w=352&h=198&fit=crop&v=1693787326&auto=format&frame=1&q=92&s=7270727f76117158c582239e907b105d",
    },
    {
        title: "Cretaceous Rails",
        content:
            "A medium-weight euro game for 1-4 players. Build a rail and resort empire in the Cretaceous era.",
        createdBy: "Spielcraft Games",
        img: "https://ksr-ugc.imgix.net/assets/042/453/761/034f821b9bdc45613bb96c6af5daed06_original.jpg?ixlib=rb-4.1.0&crop=faces&w=352&h=198&fit=crop&v=1695750294&auto=format&frame=1&q=92&s=ab20537ca6618052014d2bf772ce15f2",
    },
    {
        title: "SealDiver : An Exclusive Automatic Diver Watch by UW",
        content: "An Automatic Diver Watch Inspired by the Seal",
        createdBy: "UW",
        img: "https://ksr-ugc.imgix.net/assets/041/967/332/a934ca97a3da81ca047eb2649a5bee09_original.jpg?ixlib=rb-4.1.0&crop=faces&w=352&h=198&fit=crop&v=1692192740&auto=format&frame=1&q=92&s=2122165a14975fa963a3bc6d3dd6f66e",
    },
    {
        title: "Jack in the Box Puzzle",
        content:
            "Eight aluminum blocks unite to form a perfect cube. But there’s more… Uncover a puzzle within a puzzle, wrapped in a magic trick.",
        createdBy: "Craighill",
        img: "https://ksr-ugc.imgix.net/assets/042/436/149/b651c63272367e3c7c90f6448444b44b_original.jpg?ixlib=rb-4.1.0&crop=faces&w=352&h=198&fit=crop&v=1695654531&auto=format&frame=1&q=92&s=6ef29eaee30661e0ed4959875da1a7fb",
    },
    {
        title: "ClickPack Travlo | 45L Anti-Theft 🔐 Travel Backpack 🗺️",
        content:
            "Go Anywhere with Peace of Mind! For Travel, Gym, Gear, And Those Who Live Life On The Move.",
        createdBy: "Korin Design",
        img: "https://ksr-ugc.imgix.net/assets/042/429/720/f432a327489cf745ca766896b25c25cd_original.jpg?ixlib=rb-4.1.0&crop=faces&w=352&h=198&fit=crop&v=1695609748&auto=format&frame=1&q=92&s=b45b7aab87da423d60b6fbaf2ca98036",
    },
    {
        title: "Wastelands #1",
        content:
            "Wastelands is a Cyberpunk Spaghetti Western and the debut title from writer & illustrator Ray (Caburnay) Rainsberger",
        createdBy: "Ray Alguire Rainsberger",
        img: "https://ksr-ugc.imgix.net/assets/042/410/040/0471d23f5cdb5264e3046c75e4f7e8ac_original.png?ixlib=rb-4.1.0&crop=faces&w=352&h=198&fit=crop&v=1695418707&auto=format&frame=1&q=92&s=06047dadb23d18c85e1474232bc09552",
    },
];

export default function CartPage() {
    return (
        <BasePageComponent>
            <div className="container h-100">
                <h1 className="py-5">Projetos</h1>

                {projects.length > 0 ? (
                    <div className="d-flex flex-wrap justify-content-around">
                        {projects.map((item) => (
                            <ProjectCardComponent
                                img={item.img}
                                title={item.title}
                                content={item.content}
                                createdBy={item.createdBy}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center">
                        <h1 className="text-danger">Sem Projetos!</h1>
                    </div>
                )}
            </div>
        </BasePageComponent>
    );
}
