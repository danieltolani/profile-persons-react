import React from "react";
import '../styles/footer.css'

const Footer = (props) => {
    return(
        <section className="footer-section">
            <svg width="188" height="32" viewBox="0 0 188 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.116 23.16v-.091l8.949-12.556V7.668H1.72v3.336h8.405v.09l-8.767 12.48v2.909H15.09V23.16H6.116Zm20.276-9.608v6.271c0 1.203-.284 2.134-.827 2.78-.556.66-1.242.983-2.043.983-.828 0-1.423-.232-1.785-.698-.362-.466-.53-1.293-.53-2.457v-6.88h-3.466v7.785c0 .97.104 1.798.337 2.496.232.698.556 1.254.995 1.668.44.414.931.724 1.5.918.556.194 1.203.285 1.927.285a4.85 4.85 0 0 0 2.095-.453c.66-.31 1.241-.75 1.746-1.345h.051v1.578h3.466V13.552h-3.466Zm14.276-.22c-.776 0-1.487.194-2.16.556-.672.362-1.254.892-1.745 1.565h-.039v-1.901H33.26v12.93h3.465v-6c0-.982.285-1.797.867-2.43.581-.62 1.396-.944 2.43-.944.26 0 .57.013.919.039v-3.802c-.052 0-.142-.013-.272-.013Zm4.41-1.604c.581 0 1.086-.206 1.513-.62.413-.414.633-.905.633-1.5 0-.57-.22-1.073-.633-1.487a2.101 2.101 0 0 0-1.513-.621c-.595 0-1.112.207-1.526.62-.414.415-.621.919-.621 1.488 0 .388.09.75.285 1.073.18.323.44.582.775.763.337.194.699.284 1.087.284Zm-1.733 14.755h3.465V13.552h-3.465v12.93Zm21.53 0h3.75V7.668h-3.75v18.815Zm15.35-13.151a5.56 5.56 0 0 0-2.29.491 5.201 5.201 0 0 0-1.862 1.397h-.038v-1.668h-3.466v12.93h3.465V19.98c0-1.126.26-1.992.79-2.613.53-.607 1.24-.918 2.146-.918.84 0 1.461.246 1.875.724.4.492.608 1.32.608 2.509v6.815h3.465v-7.681c0-.97-.116-1.81-.336-2.535-.233-.711-.556-1.28-.983-1.707a4.2 4.2 0 0 0-1.474-.93c-.556-.208-1.19-.311-1.9-.311Zm12.038 13.37c.789 0 1.435-.064 1.94-.206.491-.13.995-.336 1.487-.608l-.892-2.767c-.595.31-1.139.452-1.63.452-.414 0-.698-.129-.88-.4-.18-.26-.258-.686-.258-1.255v-5.496h3.517v-2.87H92.03V8.948l-3.465.375v4.229h-1.526v2.87h1.526v5.975c0 1.422.323 2.495.982 3.22.66.724 1.565 1.086 2.716 1.086Zm17.263-6.801c0-1.255-.272-2.38-.789-3.375a5.903 5.903 0 0 0-2.237-2.34c-.97-.57-2.082-.854-3.323-.854-.905 0-1.759.168-2.548.491a6.109 6.109 0 0 0-2.043 1.371c-.569.582-1.008 1.293-1.332 2.12-.336.828-.491 1.733-.491 2.69 0 1.32.284 2.496.866 3.518a5.93 5.93 0 0 0 2.393 2.366c1.008.543 2.133.815 3.4.815 1.242 0 2.328-.22 3.285-.66.944-.44 1.707-1.034 2.302-1.784l-2.25-2.095c-.815.983-1.85 1.474-3.091 1.461-.827 0-1.539-.233-2.121-.672-.581-.44-.969-1.035-1.176-1.81h9.064c.052-.208.091-.621.091-1.242Zm-6.233-3.517c.724 0 1.332.207 1.81.607.466.401.802.957.983 1.655h-5.702c.194-.724.543-1.293 1.06-1.68.517-.388 1.125-.582 1.849-.582Zm16.409-3.052c-.776 0-1.486.194-2.159.556-.672.362-1.254.892-1.746 1.565h-.039v-1.901h-3.464v12.93h3.464v-6c0-.982.285-1.797.867-2.43.582-.62 1.397-.944 2.432-.944.258 0 .568.013.918.039v-3.802c-.052 0-.143-.013-.273-.013Zm10.177 0c-.801 0-1.564.168-2.288.491a5.211 5.211 0 0 0-1.863 1.397h-.039v-1.668h-3.464v12.93h3.464V19.98c0-1.126.26-1.992.789-2.613.531-.607 1.242-.918 2.147-.918.84 0 1.462.246 1.875.724.401.492.607 1.32.607 2.509v6.815h3.466v-7.681c0-.97-.116-1.81-.336-2.535-.233-.711-.556-1.28-.982-1.707a4.196 4.196 0 0 0-1.475-.93c-.556-.208-1.189-.311-1.901-.311Zm12.194 13.37c1.629 0 2.87-.361 3.725-1.112.853-.737 1.293-1.706 1.293-2.909 0-.31-.027-.608-.079-.866-.167-.854-.672-1.552-1.499-2.07-.491-.31-1.448-.723-2.87-1.254-.687-.258-1.178-.491-1.488-.698-.31-.207-.452-.44-.452-.698 0-.31.129-.543.387-.711.26-.169.543-.259.88-.259.491 0 1.008.116 1.551.35a5.384 5.384 0 0 1 1.539 1.02l1.681-2.534c-.737-.569-1.486-.982-2.237-1.241a7.703 7.703 0 0 0-2.496-.388c-.879 0-1.68.168-2.379.478-.698.324-1.254.776-1.668 1.371-.414.595-.607 1.267-.607 2.03 0 .414.039.789.141 1.125.092.35.233.66.414.918.182.272.388.518.621.724.233.22.505.414.828.595.31.181.62.324.931.453.31.13.659.259 1.047.388.608.207 1.061.362 1.371.491.31.13.543.272.724.427.168.155.259.323.259.517 0 .323-.142.582-.427.776-.285.207-.672.297-1.164.297-1.319 0-2.508-.504-3.582-1.512l-1.681 2.392c1.436 1.267 3.182 1.9 5.237 1.9Zm15.414-13.37c-.84 0-1.616.155-2.34.452-.725.31-1.345.75-1.863 1.332h-.051V6.983h-3.465v19.5h3.465v-6.556c0-1.138.259-1.992.802-2.587.529-.594 1.267-.892 2.223-.892.854 0 1.488.246 1.901.712.414.478.622 1.293.622 2.43v6.906h3.478V18.71c0-.957-.117-1.797-.35-2.495-.232-.699-.568-1.268-.995-1.682a4.062 4.062 0 0 0-1.5-.905 5.911 5.911 0 0 0-1.927-.297Zm9.97-1.604c.582 0 1.086-.206 1.513-.62.414-.414.633-.905.633-1.5 0-.57-.219-1.073-.633-1.487a2.101 2.101 0 0 0-1.513-.621c-.595 0-1.112.207-1.526.62a2.042 2.042 0 0 0-.621 1.488c0 .388.091.75.285 1.073.18.323.44.582.775.763.337.194.699.284 1.087.284Zm-1.732 14.755h3.465V13.552h-3.465v12.93Zm14.573-13.151c-1.655 0-2.962.569-3.918 1.707h-.052v-1.487h-3.466V31.72h3.466v-6.685h.052c.918 1.112 2.184 1.668 3.814 1.668.88 0 1.707-.155 2.47-.479a5.636 5.636 0 0 0 1.965-1.332 6.163 6.163 0 0 0 1.293-2.107c.31-.828.466-1.746.466-2.729 0-.776-.104-1.5-.297-2.198a6.838 6.838 0 0 0-.854-1.862 6.456 6.456 0 0 0-1.293-1.423 5.524 5.524 0 0 0-1.694-.918 6.177 6.177 0 0 0-1.952-.323Zm-.737 10.267a3.493 3.493 0 0 1-1.72-.427c-.518-.284-.918-.71-1.216-1.254-.297-.543-.44-1.15-.44-1.849 0-.504.078-.983.246-1.435a3.57 3.57 0 0 1 .698-1.151c.285-.31.646-.57 1.06-.75.414-.181.88-.285 1.372-.285.943 0 1.732.337 2.366.996.621.672.944 1.539.944 2.625 0 1.047-.311 1.9-.931 2.547-.621.66-1.41.983-2.379.983Z" fill="#000"/><path d="M56.222 26.886a3.76 3.76 0 0 0 2.75-1.138c.759-.759 1.162-1.66 1.162-2.726 0-1.043-.403-1.968-1.162-2.727-.759-.758-1.683-1.161-2.75-1.161-1.114 0-2.063.379-2.821 1.138a3.76 3.76 0 0 0-1.138 2.75c0 1.09.38 1.991 1.138 2.75.758.758 1.707 1.114 2.821 1.114Z" fill="#E7332B"/></svg>
            <p>{props.footerText}</p>
            <svg width="97" height="25" viewBox="0 0 97 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M44.109 3.973c-1.596.28-2.743 1.302-3.161 2.813-.082.297-.096.459-.098 1.146-.002.706.01.84.095 1.137.261.9.795 1.662 1.508 2.151.525.361 1.274.643 1.955.735.59.08 1.485.034 2.009-.102.459-.119.963-.336 1.269-.546l.198-.136V7.802h-2.815v.558c0 .757-.002.754.657.783l.49.021.013.59.012.59-.272.096c-.339.12-1.068.164-1.433.088-.389-.08-.89-.353-1.145-.62-.26-.276-.504-.739-.602-1.144-.098-.402-.096-1.239.003-1.607.16-.59.511-1.116.927-1.382.377-.241.665-.318 1.22-.324.646-.007.95.063 1.503.348.672.345.757.323 1.18-.309.16-.238.303-.456.319-.483.042-.073-.497-.471-.907-.67-.584-.282-1.089-.39-1.9-.408-.455-.01-.806.005-1.025.044Zm22.525.002c-.449.1-.967.38-1.273.686-.46.462-.676.988-.676 1.648 0 .68.182 1.158.596 1.568.277.274.665.466 1.374.681.786.238 1.075.357 1.266.52.229.195.289.35.26.67-.047.521-.324.743-.963.77-.481.021-.787-.069-1.315-.388-.412-.249-.628-.299-.814-.189-.127.075-.67.879-.68 1.007-.014.18.998.75 1.64.921.487.13 1.314.162 1.776.068a2.683 2.683 0 0 0 1.384-.73c.53-.53.738-1.107.706-1.958-.015-.425-.032-.509-.154-.77-.297-.633-.778-.954-2.078-1.387-1.043-.347-1.266-.515-1.266-.954 0-.235.078-.403.257-.554.202-.17.4-.215.846-.196.379.017.427.03.865.243.732.355.814.326 1.214-.432l.244-.462-.208-.153a3.985 3.985 0 0 0-1.174-.55c-.441-.119-1.42-.15-1.827-.059Zm6.863.004c-1.183.26-1.97 1.186-1.97 2.317 0 .651.193 1.176.573 1.555.277.277.81.538 1.527.75.731.216 1.02.345 1.215.544.156.16.169.192.183.463.02.386-.1.633-.38.789-.175.097-.245.108-.672.108-.473 0-.479-.001-.844-.183a16.93 16.93 0 0 1-.602-.313c-.284-.16-.474-.168-.641-.027-.154.13-.677.961-.641 1.02.057.092.588.438.892.581.176.083.496.204.71.269.356.108.452.118 1.105.12.673.001.734-.006 1.06-.12.474-.166.787-.366 1.107-.708.483-.515.67-1.07.64-1.9-.014-.417-.031-.5-.154-.761a2.023 2.023 0 0 0-.914-.934c-.183-.094-.683-.291-1.112-.437-1.065-.363-1.32-.547-1.32-.95 0-.237.088-.436.256-.577.197-.166.411-.216.853-.198.366.014.415.029.855.242.523.254.7.28.868.13.092-.083.474-.735.558-.954.061-.16-.71-.602-1.339-.77-.458-.122-1.383-.15-1.813-.056ZM27.792 7.954v3.956h1.862V3.997h-1.862v3.957Zm4.2 0v3.956h1.652l-.014-2.463c-.013-2.184-.007-2.456.05-2.399.036.036.884 1.098 1.884 2.362 1 1.263 1.874 2.338 1.941 2.387.11.082.192.093.769.105l.646.014v-7.92l-.812.01-.811.013v2.454c0 1.35-.01 2.452-.022 2.45A153.7 153.7 0 0 1 35.37 6.54c-1.036-1.31-1.942-2.418-2.014-2.462-.11-.068-.223-.08-.747-.08h-.617v3.957Zm17.97 0v3.956h1.818l.011-1.438.012-1.437.354-.013c.336-.012.362-.006.488.108.073.067.451.675.84 1.353.624 1.09.724 1.244.875 1.33.162.091.218.096 1.13.096l.96.001-.867-1.416c-.886-1.448-.978-1.578-1.255-1.783l-.16-.117.268-.126c.357-.167.883-.682 1.04-1.02.327-.698.328-1.565.003-2.205-.134-.264-.479-.619-.76-.782-.283-.164-.905-.363-1.306-.418-.189-.025-1.03-.046-1.895-.046h-1.556v3.957Zm7.968 0v3.956h5.109v-1.427h-3.247v-1.86h2.468V7.24h-2.468V5.424h3.247V3.997H57.93v3.957Zm20.741 0v3.956h1.862V3.997H78.672v3.957Zm4.886 0 1.588 3.955h1.689l1.588-3.956 1.589-3.956h-.857c-.818 0-.863.004-.997.097a.776.776 0 0 0-.202.206c-.102.182-1.729 4.753-1.837 5.163-.074.279-.11.362-.134.303a19.621 19.621 0 0 1-.18-.558c-.19-.604-1.698-4.764-1.78-4.908a.784.784 0 0 0-.202-.206c-.134-.093-.18-.097-.997-.097h-.857l1.589 3.956Zm7.888 0v3.956h5.112l-.012-.703-.011-.702-1.614-.012-1.612-.01v-1.86h2.468V7.24h-2.468V5.424h3.247V3.997h-5.11v3.957ZM53.174 5.466c.492.152.73.493.728 1.048 0 .525-.217.874-.67 1.08-.192.086-.287.097-.823.099l-.606.001-.012-1.102c-.006-.606-.002-1.126.01-1.156.036-.096 1.038-.074 1.373.03ZM38.98 14.053c-2.047.344-3.422 2.113-3.293 4.237.117 1.924 1.345 3.338 3.232 3.72.55.11 1.624.07 2.128-.082.74-.222 1.24-.51 1.72-.987.773-.768 1.147-1.718 1.148-2.912.002-1.173-.379-2.126-1.159-2.9-.913-.907-2.346-1.316-3.776-1.076Zm22.305-.004c-1.665.263-2.85 1.335-3.257 2.948-.116.46-.103 1.648.024 2.113.504 1.853 2.08 2.962 4.207 2.962.993 0 1.754-.195 2.447-.626l.325-.203-.01-1.672-.012-1.672h-2.815v.577c0 .745-.003.742.677.742h.473l-.012.614-.012.615-.325.102c-.599.19-1.35.131-1.94-.152-.54-.26-1.012-.909-1.156-1.59-.083-.396-.082-1.176.003-1.535.39-1.66 2.088-2.253 3.786-1.323.33.18.54.199.711.064.095-.074.675-.906.675-.967 0-.042-.53-.419-.783-.557-.785-.429-1.975-.603-3.006-.44Zm9.8-.02c-1.165.185-2.175.807-2.749 1.692a4.147 4.147 0 0 0-.544 1.212c-.086.314-.098.458-.096 1.117.004.896.068 1.192.406 1.881a3.63 3.63 0 0 0 1.713 1.711c.714.35.979.404 1.97.404.968 0 1.252-.055 1.903-.366 1.06-.506 1.741-1.326 2.084-2.511.14-.484.164-1.478.05-2.027a3.881 3.881 0 0 0-2.915-3.028c-.415-.102-1.418-.149-1.822-.085Zm10.811.002c-.355.054-.941.24-1.255.398a3.869 3.869 0 0 0-1.994 2.46 4.855 4.855 0 0 0-.09 1.881c.277 1.585 1.331 2.753 2.864 3.174.487.134 1.59.168 2.1.066.798-.162 1.45-.488 1.98-.991.735-.697 1.122-1.508 1.222-2.56.2-2.102-1.006-3.852-2.995-4.347-.412-.102-1.406-.147-1.832-.082Zm-54.105 3.998v3.956h1.862v-3.07h2.685v-1.427h-2.685V15.5H32.9v-1.427h-5.109v3.957Zm18.923-.004v3.96h1.818l.01-1.437.012-1.438.355-.013c.335-.012.361-.006.488.108.073.067.45.674.836 1.349.43.75.75 1.263.825 1.319.114.085.184.092 1.12.104.82.01.995.003.977-.045-.065-.167-1.707-2.8-1.823-2.922a1.724 1.724 0 0 0-.28-.232l-.142-.089.207-.097c.302-.14.703-.459.89-.704.32-.42.466-.89.466-1.495 0-1.12-.62-1.85-1.852-2.18-.415-.11-.45-.113-2.164-.13l-1.743-.018v3.96Zm42.609 0v3.96h1.85c1.644 0 1.896-.01 2.247-.082 1.567-.323 2.688-1.416 3.032-2.956.108-.483.098-1.422-.021-1.907-.102-.416-.35-.984-.567-1.299-.514-.746-1.323-1.287-2.32-1.549-.321-.085-.483-.092-2.284-.109l-1.937-.017v3.96ZM50.027 15.58c.441.197.626.485.627.979.001.45-.06.615-.318.867-.3.291-.557.365-1.275.365h-.528v-1.139c0-.626.015-1.154.033-1.172.018-.018.305-.025.639-.015.507.016.641.034.822.115Zm-9.453.048c.675.21 1.149.75 1.364 1.558.105.392.104 1.342-.003 1.726-.304 1.102-1.123 1.695-2.257 1.635-1.34-.071-2.098-.981-2.098-2.518 0-1.635.923-2.597 2.398-2.502.19.013.457.058.596.101Zm31.69-.068c1.108.198 1.741 1.095 1.74 2.465-.001.848-.191 1.435-.614 1.897-.763.833-2.35.855-3.153.044-.51-.515-.763-1.397-.66-2.301.148-1.294.76-1.965 1.95-2.138.22-.032.42-.023.738.033Zm11.17.082c.939.308 1.506 1.36 1.412 2.622-.093 1.242-.652 1.997-1.654 2.233-.39.092-1.014.061-1.393-.07-.714-.246-1.204-.879-1.356-1.753-.082-.472-.031-1.268.107-1.676.353-1.039 1.127-1.543 2.257-1.47.19.012.472.064.627.114ZM93 15.566c.788.185 1.347.778 1.569 1.663.086.346.076 1.33-.018 1.677-.225.83-.698 1.351-1.432 1.574-.265.08-.419.093-1.11.096l-.802.004-.01-2.54-.012-2.54h.769c.532 0 .854.02 1.046.066Z" fill="#000"/><g clip-path="url(#a)"><path d="M11.166 14.601c.113.213.245.42.333.642.085.217.144.45.176.68.017.125-.027.267-.075.39a6.25 6.25 0 0 1-.315.653 71.656 71.656 0 0 1-2.08-1.16c-1.455-.841-2.908-1.685-4.363-2.528-.907-.525-1.812-1.055-2.723-1.574-.234-.134-.484-.236-.727-.353.158-.719.316-1.438.493-2.153.1.06.177.126.263.175 1.003.583 2.006 1.166 3.013 1.742.234.134.48.245.722.366.317.302.621.62.96.895.088.071.285.008.452.024.067.068.105.134.162.168.993.58 1.986 1.161 2.986 1.729.226.128.481.204.723.304Z" fill="#35AAD2"/><path d="M15.853 23.32c-.669.154-1.337.308-2.024.444-.054-.066-.08-.132-.128-.16-.632-.372-1.267-.74-1.902-1.107l-2.652-1.534-2.393-1.38c-.804-.462-1.607-.927-2.412-1.39-.636-.365-1.271-.731-1.911-1.09-.065-.036-.157-.021-.237-.03-.2-.585-.4-1.17-.597-1.755a.587.587 0 0 1-.026-.224c.273.112.532.232.78.373.872.5 1.741 1.007 2.612 1.511L7.39 18.38c.86.496 1.717.995 2.576 1.49.903.52 1.81 1.035 2.713 1.555a436.71 436.71 0 0 1 2.685 1.558c.17.1.326.224.489.338Z" fill="#319AD0"/><path d="M15.87 23.318c-.18-.111-.336-.236-.506-.336a434.554 434.554 0 0 0-2.685-1.558c-.904-.52-1.81-1.035-2.713-1.555-.86-.495-1.717-.993-2.576-1.49l-2.427-1.4c-.87-.504-1.74-1.012-2.613-1.512-.247-.14-.506-.26-.776-.39-.082-.42-.147-.838-.194-1.277a.45.45 0 0 1 .195.056c.967.555 1.935 1.109 2.9 1.666l4.35 2.52c1.007.583 2.014 1.17 3.025 1.749.248.142.507.263.761.393.061.023.123.046.196.093.071.075.124.135.19.173 1.252.723 2.506 1.442 3.757 2.167.112.065.204.164.306.247-.391.151-.782.302-1.19.454Z" fill="#329ED1"/><path d="M1.387 11.37c.248.098.498.2.732.334.91.52 1.816 1.049 2.723 1.574 1.455.843 2.908 1.687 4.364 2.527.684.396 1.372.783 2.073 1.176a.974.974 0 0 0 .253.75c.256.296.356.66.404 1.053a.592.592 0 0 1-.236-.065c-.96-.55-1.92-1.1-2.877-1.653-1.362-.788-2.722-1.578-4.083-2.367-.901-.522-1.8-1.048-2.705-1.564-.233-.134-.484-.237-.727-.354.025-.465.05-.929.079-1.411Z" fill="#33A4D1"/><path d="M9.375 2.026c.622-.126 1.243-.267 1.87-.373.315-.053.642-.043.99-.045.098.076.162.146.24.193.391.229.786.45 1.178.677 1.567.906 3.135 1.812 4.7 2.722.116.068.21.177.313.267-.382.441-.764.883-1.16 1.317-.04-.041-.059-.086-.092-.105-.372-.219-.745-.434-1.119-.65L13.868 4.63c-.777-.449-1.555-.897-2.332-1.348-.721-.417-1.441-.837-2.161-1.256Z" fill="#3CD1D7"/><path d="M2.196 17.089c.078-.007.17-.022.235.014.64.359 1.275.725 1.911 1.09.805.463 1.608.928 2.412 1.39l2.393 1.38c.884.51 1.768 1.022 2.652 1.534.635.367 1.27.735 1.902 1.107.048.028.074.094.11.158-.622.046-1.244.077-1.888.09-.158-.118-.286-.23-.431-.316-.88-.514-1.764-1.023-2.647-1.532l-2.389-1.378c-.808-.466-1.615-.936-2.426-1.398-.317-.18-.645-.34-.968-.51-.288-.538-.576-1.076-.866-1.63Z" fill="#3096D0"/><path d="M19.386 11.778c.106-.409.217-.817.312-1.23.017-.077-.033-.17-.052-.257-.074.028-.149.054-.222.085-.305.127-.61.257-.914.384-.16.068-.249-.053-.276-.16-.07-.278-.267-.452-.482-.585-.354-.22-.523-.587-.77-.891-.029-.036-.006-.15.031-.198.115-.147.248-.28.403-.424.11.037.195.077.276.124.765.442 1.53.887 2.295 1.33.915.529 1.829 1.059 2.747 1.582.266.151.545.28.818.42-.013.695-.027 1.39-.061 2.104a.537.537 0 0 1-.218-.062c-.563-.318-1.124-.637-1.684-.958-.735-.42-1.469-.842-2.203-1.264Z" fill="#3BC7D6"/><path d="M19.375 11.788c.745.412 1.48.833 2.214 1.254.56.32 1.121.64 1.684.958.06.035.131.054.213.08a46.488 46.488 0 0 1-.499 2.195c-.38-.189-.739-.386-1.094-.59-.803-.461-1.607-.923-2.407-1.39-.465-.27-.925-.548-1.387-.823.233-.271.48-.532.697-.816.206-.273.38-.57.58-.868Z" fill="#39BFD5"/><path d="M18.086 13.479c.475.268.935.546 1.4.817.8.466 1.604.928 2.407 1.389.355.204.713.401 1.085.603a32.014 32.014 0 0 1-.715 1.671c-.6-.337-1.176-.676-1.759-1.004-.26-.147-.534-.27-.805-.422-.052-.186-.1-.354-.152-.53-.214.227-.388.413-.576.591-.173-.114-.325-.234-.492-.325-.274-.149-.557-.279-.836-.417-.015-.123-.026-.247-.047-.369-.03-.175-.069-.348-.102-.522-.004-.02.009-.046.002-.065-.182-.522.196-.849.43-1.225.04-.066.098-.123.16-.192Z" fill="#38B9D4"/><path d="M1.304 12.8c.247.098.498.201.731.334.905.517 1.804 1.043 2.705 1.565 1.36.79 2.721 1.58 4.083 2.367.958.553 1.917 1.104 2.877 1.653.068.038.147.056.237.082.11.165.186.343.3.492.197.256.408.498.371.872a8.275 8.275 0 0 1-.758-.374c-1.01-.58-2.018-1.166-3.026-1.75-1.45-.84-2.899-1.68-4.35-2.519-.964-.558-1.932-1.111-2.899-1.666-.055-.032-.118-.05-.194-.075-.038-.32-.06-.64-.077-.98Z" fill="#33A1D1"/><path d="M23.555 11.939a8.587 8.587 0 0 1-.821-.401c-.918-.523-1.833-1.054-2.747-1.582-.766-.443-1.53-.888-2.295-1.33a2.852 2.852 0 0 0-.263-.13c.234-.28.478-.563.738-.831.047-.049.172-.07.238-.044.278.106.507.054.721-.163 1.278.733 2.535 1.46 3.794 2.186.078.045.168.07.252.103.225.707.333 1.435.383 2.192Z" fill="#3CCCD6"/><path d="M18.68 5.461c-.118-.084-.21-.193-.327-.26-1.565-.911-3.133-1.816-4.7-2.723-.392-.226-.787-.448-1.177-.677-.079-.047-.143-.117-.22-.19.359-.009.727-.026 1.09.005a11.098 11.098 0 0 1 6.575 2.85c-.414.333-.821.661-1.241.995Z" fill="#3FD7D8"/><path d="M14.81 6.418c-.398-.083-.793-.176-1.193-.243a1.227 1.227 0 0 0-.487.022c-.063.016-.122.148-.137.235-.032.192-.094.263-.265.18-.215-.105-.517-.064-.631-.357-.013-.035-.103-.04-.157-.057-.2-.062-.401-.117-.598-.187-.116-.042-.154-.108-.096-.251.059-.146.049-.32.076-.537-.187-.005-.35-.015-.513-.013-.331.003-.662.013-1.011-.002-.061-.076-.095-.147-.15-.18-.482-.283-.97-.556-1.452-.839-.53-.31-1.057-.629-1.586-.944a50.852 50.852 0 0 1 1.544-.779c.104.065.17.133.25.18.726.423 1.452.845 2.18 1.264 1.283.737 2.568 1.47 3.848 2.211.138.08.252.197.377.297Z" fill="#3CCAD6"/><path d="M14.827 6.42c-.143-.102-.257-.22-.395-.299-1.28-.74-2.565-1.474-3.848-2.211-.728-.419-1.454-.841-2.18-1.265-.08-.046-.146-.115-.234-.18.38-.15.776-.293 1.188-.438.737.418 1.457.838 2.178 1.255l2.332 1.348 2.427 1.4c.374.215.747.43 1.119.649.033.02.052.064.079.112-.163.243-.327.47-.507.689l-1.002-.59c-.067-.16-.124-.324-.208-.472-.03-.05-.132-.088-.197-.083-.246.017-.49.055-.752.084Z" fill="#3BCDD6"/><path d="M3.065 18.733c.32.154.648.315.965.495.811.462 1.618.932 2.426 1.398l2.389 1.378c.883.51 1.766 1.018 2.647 1.533.145.084.273.198.411.312-.77-.107-1.557-.17-2.311-.36-2.104-.531-3.89-1.624-5.348-3.23-.428-.47-.786-1.006-1.179-1.526Z" fill="#3193CF"/><path d="M5.882 11.466a7.583 7.583 0 0 1-.72-.35c-1.008-.577-2.01-1.16-3.014-1.743-.086-.05-.163-.114-.25-.186.266-.638.54-1.26.838-1.893.724.395 1.424.804 2.128 1.205.216.123.442.227.664.34-.083.263-.15.533-.255.788-.078.19-.041.648.064.822.197.325.365.666.545 1.017Z" fill="#36B1D3"/><path d="M23.172 9.73a.829.829 0 0 1-.252-.086 627.826 627.826 0 0 1-3.782-2.194c.011-.174.023-.334.054-.491.014-.07.05-.156.104-.193.524-.353 1.054-.697 1.581-1.045.12-.08.203-.053.29.06.924 1.18 1.61 2.481 2.005 3.949Z" fill="#3DD3D7"/><path d="M16.701 21.198c-.466-.615-.904-1.229-1.137-2.034.167.086.283.145.397.206.16.084.318.17.475.257.182.1.33.201.389.443.096.39.615.484.912.186.083-.084.147-.102.26-.08a4.898 4.898 0 0 0 2.843-.266c.03-.012.065-.017.124.008-.211.23-.414.471-.637.69-.66.65-1.384 1.22-2.177 1.701-.147.09-.262.102-.381-.02l-1.067-1.091Z" fill="#36A8D2"/><path d="M20.613 19.664c-.667.323-1.373.389-2.1.329-.114-.01-.227-.033-.34-.048-.167-.022-.273-.077-.33-.27-.102-.343-.517-.471-.811-.258-.137.1-.244.094-.373.024-.234-.126-.485-.228-.698-.383-.284-.207-.257-.342.048-.503.212-.113.376-.283.315-.534-.087-.36.065-.575.375-.73.087.06.15.12.222.163.326.192.652.384.984.566.223.123.456.23.697.348a.332.332 0 0 1 .107.061c.05.057.091.109.145.14.398.232.802.454 1.196.692.196.12.375.268.563.403Z" fill="#36ADD3"/><path d="M6.595 3.248c.544.312 1.07.63 1.601.941.482.283.97.556 1.452.84.056.032.089.103.133.173-.189.056-.394.06-.564.14-.338.16-.65.172-.933-.04-.225.176-.43.341-.64.502-.11.085-.216.077-.333-.006-.744-.529-1.527-.982-2.458-1.222a9.817 9.817 0 0 1 1.742-1.328Z" fill="#3BC4D5"/><path d="M17.075 22.862c-.117-.08-.209-.18-.321-.245-1.251-.725-2.505-1.444-3.757-2.166-.066-.038-.119-.099-.18-.164.392-.046.787-.058 1.177-.112.444-.06.798-.311 1.115-.616.17-.165.189-.16.31.043.333.556.634 1.133 1.011 1.657.342.475.766.89 1.17 1.35-.145.071-.328.161-.525.253Z" fill="#33A1D1"/><path d="M5.529 8.82a6.064 6.064 0 0 1-.665-.32c-.704-.402-1.404-.81-2.12-1.218.071-.152.149-.307.246-.45a.348.348 0 0 1 .186-.126c.334-.088.671-.164 1.008-.242.123-.029.202-.008.268.132.184.394.62.447.929.14.053-.053.15-.111.212-.097.23.052.457.129.681.207.146.05.162.136.06.262-.256.319-.515.638-.749.973-.066.096-.058.25-.067.378-.008.112.007.227.01.36Z" fill="#39B8D4"/><path d="M11.162 14.588c-.238-.087-.493-.163-.719-.291-1-.568-1.993-1.15-2.986-1.73-.057-.033-.095-.1-.144-.166.24-.012.483-.006.725-.005.13 0 .266.01.392-.016.322-.068.64-.162.96-.231.183-.04.308.047.36.228.064.221.203.32.435.281.064-.01.13-.002.195 0 .26.004.432.198.39.453-.03.175-.06.354-.12.521-.082.232-.01.405.15.566.12.123.238.25.362.39Z" fill="#38B0D4"/><path d="M5.73 6.395c-.095-.078-.206-.134-.248-.223-.202-.422-.7-.482-.988-.116a.402.402 0 0 1-.22.136c-.302.059-.608.098-.913.145l-.037-.048c.287-.349.565-.705.862-1.044.431-.492.435-.48 1.055-.284.706.223 1.307.633 1.907 1.048.133.092.134.199.093.338-.054.182-.115.353-.335.37a.842.842 0 0 1-.297-.038c-.29-.087-.576-.184-.88-.284Z" fill="#3BBED5"/><path d="M19.702 16.55c.268.134.541.258.802.404.583.328 1.16.668 1.747 1.015-.173.323-.355.633-.564.952a1.405 1.405 0 0 1-.274-.12c-.693-.391-1.385-.783-2.074-1.191.123-.365.243-.712.363-1.06Z" fill="#37B4D3"/><path d="m19.336 17.627 2.077 1.174c.08.045.165.085.262.129-.233.388-.64.548-1.047.732-.203-.133-.382-.281-.578-.4-.394-.24-.798-.46-1.196-.693a.348.348 0 0 1-.126-.141c.347-.013.384-.042.456-.315.044-.164.1-.324.152-.486ZM18.589 18.365c-.228-.115-.46-.222-.684-.345a39.211 39.211 0 0 1-.984-.567c-.073-.042-.135-.102-.208-.168.165-.132.341-.242.506-.367.262-.198.462-.432.407-.797-.012-.077.002-.157.01-.253.286.122.57.252.843.4.167.092.32.212.482.338a.207.207 0 0 1-.092.069c-.315.124-.336.17-.292.512.015.11.025.245-.024.335-.159.296-.072.567.036.843Z" fill="#36B1D3"/><path d="M18.215 6.364c.508-.615 1.08-1.16 1.764-1.58.13-.08.229-.082.336.044.163.191.343.369.53.567-.475.313-.93.616-1.389.914-.264.171-.51.415-.903.238-.134-.067-.236-.125-.338-.183Z" fill="#40D5D8"/><path d="M18.203 6.372c.114.05.216.108.334.173-.402.206-.435.27-.407.756.003.053-.037.123-.078.162-.36.344-.721.685-1.089 1.02-.049.045-.132.053-.2.077-.001-.086-.037-.194.001-.256.162-.264.337-.52.524-.768.294-.39.602-.771.915-1.164Z" fill="#41CED7"/><path d="M15.981 6.906c.332.178.661.372.993.582-.166.237-.333.459-.522.708-.198-.316-.391-.58-.53-.87-.05-.102.033-.267.06-.42Z" fill="#3BCBD6"/><path d="M18.602 18.367c-.121-.279-.208-.55-.049-.844.05-.091.039-.226.024-.336-.044-.343-.023-.388.292-.512a.548.548 0 0 0 .106-.062l.572-.61c.051.175.1.344.152.53-.117.365-.237.712-.36 1.077-.054.179-.111.339-.155.503-.072.273-.109.302-.459.3-.05-.014-.08-.028-.123-.046Z" fill="#FCFEFE"/></g><defs><clipPath id="a"><path fill="#fff" d="M.728.998h25.3v24H.728z"/></clipPath></defs></svg>
        </section>
    )
}

export default Footer;