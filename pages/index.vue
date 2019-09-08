<template>
  <div class="container">
    <vue-particles
      class="tw-z-30"
      color="#ffffff"
      :particleOpacity="0.5"
      linesColor="#eee"
      :particlesNumber="20"
      shapeType="circle"
      :particleSize="3"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    />
    <ksvuefp :options="options" :sections="sections" class="custom-full-page tw-z-40">
      <ksvuefp-section
        v-for="(section,index) in sections"
        :section="section"
        :key="index"
        :section-index="index"
        :background-color="'transparent'"
      >
        <transition name="fade" v-show="$ksvuefp.canAnimContent(index, true)">
          <div class="content tw-flex tw-mx-auto">
            <div class="tw-text-white tw-w-full tw-text-center" v-if="index == 0">
              <svg
                viewBox="0 0 600 500"
                id="lightbulb"
                class="tw-mb-10"
                v-anime="{ translateY: 20, direction: 'alternate', easing: 'linear', loop: true, duration: 1500 }"
              >
                <g id="Layer_3">
                  <polygon fill="#BDBDBD" points="215.8,58.3 228.2,65.6 260.6,34.2   " />
                  <polygon fill="#C9C9C9" points="193.2,97.2 228.2,65.6 215.8,58.3   " />
                  <polygon fill="#C3C3C3" points="193.2,97.2 201.3,135.6 181.1,179.4   " />
                  <polygon fill="#C6C6C6" points="398.6,205.7 362.1,253.3 372.6,202.5  " />
                  <polygon fill="#F0F0F0" points="372.6,202.5 362.1,253.3 344.8,252.1  " />
                  <polygon fill="#EAEAEA" points="325.2,234.2 372.6,202.5 344.8,252.1  " />
                  <polygon fill="#EAEAEA" points="329.2,190 372.6,202.5 325.2,234.2  " />
                  <polygon fill="#DADADA" points="248.6,234.3 242.1,266.7 214.9,206  " />
                  <polygon fill="#BDBDBD" points="242.1,266.7 213.1,239.4 214.9,206  " />
                  <polygon fill="#B6B6B6" points="242.1,266.7 233,276.1 213.1,239.4  " />
                  <polygon fill="#F5F5F5" points="292.7,200.7 254,234.2 262.2,199.9  " />
                  <polygon fill="#D1D1D1" points="292.7,200.7 262.2,199.9 257.5,195.7  " />
                  <polygon fill="#B8B8B8" points="262.2,199.9 254,234.2 257.5,195.7  " />
                  <polygon fill="#D5D5D5" points="254,234.2 248.6,234.3 257.5,195.7  " />
                  <polygon fill="#A7A7A7" points="254,234.2 268.6,273.6 248.6,234.3  " />
                  <polygon fill="#888888" points="268.6,273.6 274.2,323.5 248.6,234.3  " />
                  <polygon fill="#BABABA" points="242.1,266.7 274.2,323.5 248.6,234.3  " />
                  <polygon fill="#545454" points="241.2,323.3 274.2,323.5 242.1,266.7  " />
                  <polygon fill="#343434" points="250.4,344.5 274.2,323.5 241.2,323.3  " />
                  <polygon fill="#232323" points="274.2,323.5 250.4,344.5 274.1,348.4  " />
                  <polygon fill="#252525" points="250.4,344.5 241.3,358.3 274.1,348.4  " />
                  <polygon fill="#202020" points="241.2,323.3 241.3,358.3 250.4,344.5  " />
                  <polygon fill="#808080" points="233,276.1 241.2,323.3 242.1,266.7  " />
                  <polygon fill="#F0F0F0" points="325.2,234.2 268.6,273.6 292.7,200.7  " />
                  <polygon fill="#C8C8C8" points="300.2,285.7 268.6,273.6 325.2,234.2  " />
                  <polygon fill="#B9B9B9" points="306.3,294.5 300.2,285.7 325.2,234.2  " />
                  <polygon fill="#979797" points="305.3,317.9 306.3,294.5 325.2,234.2  " />
                  <polygon fill="#7B7B7B" points="310.3,323.1 305.3,317.9 325.2,234.2  " />
                  <polygon fill="#959595" points="329.5,300.1 310.3,323.1 325.2,234.2  " />
                  <polygon fill="#C0C0C0" points="344.8,252.1 329.5,300.1 325.2,234.2  " />
                  <polygon fill="#959595" points="362.1,253.3 329.5,300.1 344.8,252.1  " />
                  <polygon fill="#6F6F6F" points="362.1,253.3 329.5,300.1 347,313.6  " />
                  <polygon fill="#444444" points="329.5,300.1 310.3,323.1 333,336.4  " />
                  <polygon fill="#444444" points="347,313.6 329.5,300.1 333,336.4  " />
                  <polygon fill="#BABABA" points="300.2,285.7 268.6,273.6 288.1,286.9  " />
                  <polygon fill="#C0C0C0" points="288.1,286.9 268.6,273.6 280.5,294.8  " />
                  <polygon fill="#717171" points="288.1,286.9 280.5,294.8 288.7,300.6  " />
                  <polygon fill="#BABABA" points="288.7,300.6 280.5,294.8 284.2,321.4  " />
                  <polygon fill="#5F5F5F" points="288.1,286.9 288.7,300.6 298.5,305.7  " />
                  <polygon fill="#5B5B5B" points="298.5,305.7 288.7,300.6 284.2,321.4  " />
                  <polygon fill="#4D4D4D" points="284.2,321.4 294.2,321.4 298.5,305.7  " />
                  <polygon fill="#444444" points="294.2,321.4 305.3,317.9 298.5,305.7  " />
                  <polygon fill="#6B6B6B" points="300.2,285.7 288.1,286.9 298.5,305.7  " />
                  <polygon fill="#7A7A7A" points="300.2,285.7 298.5,305.7 306.3,294.5  " />
                  <polygon fill="#878787" points="306.3,294.5 298.5,305.7 305.3,317.9  " />
                  <polygon fill="#D5D5D5" points="280.5,294.8 268.6,273.6 284.2,321.4  " />
                  <polygon fill="#727272" points="284.2,321.4 268.6,273.6 274.2,323.5  " />
                  <polygon fill="#E7E7E7" points="292.7,200.7 268.6,273.6 254,234.2  " />
                  <polygon fill="#EAEAEA" points="257.5,195.7 248.6,234.3 214.9,206  " />
                  <polygon fill="#FDFDFD" points="263.8,159.7 329.2,190 292.7,200.7  " />
                  <polygon fill="#F8F8F8" points="323.9,195.1 325.2,234.2 292.7,200.7  " />
                  <polygon fill="#C5C5C5" points="329.2,190 325.2,234.2 323.9,195.1  " />
                  <polygon fill="#CDCDCD" points="329.2,190 323.9,195.1 292.7,200.7  " />
                  <polygon fill="#FDFDFD" points="228.2,65.6 272.3,95.6 193.2,97.2   " />
                  <polygon fill="#E3E3E3" points="288.6,44.7 272.3,95.6 228.2,65.6   " />
                  <polygon fill="#D8D8D8" points="260.6,34.2 288.6,44.7 228.2,65.6   " />
                  <polygon fill="#BFBFBF" points="307.4,29.8 288.6,44.7 260.6,34.2   " />
                  <polygon fill="#F7F7F7" points="272.3,95.6 263.8,159.7 201.3,135.6   " />
                  <polygon fill="#E6E6E6" points="288.6,44.7 334.7,65.5 272.3,95.6   " />
                  <polygon fill="#CCCCCC" points="307.4,29.8 334.7,65.5 288.6,44.7   " />
                  <polygon fill="#D5D5D5" points="363.9,48.7 334.7,65.5 307.4,29.8   " />
                  <polygon fill="#F2F2F2" points="334.7,65.5 338.6,137.5 272.3,95.6  " />
                  <polygon fill="#FFFFFF" points="272.3,95.6 338.6,137.5 263.8,159.7   " />
                  <polygon fill="#FFFFFF" points="338.6,137.5 372.6,202.5 263.8,159.7  " />
                  <polygon fill="#FAFAFA" points="329.2,190 372.6,202.5 263.8,159.7  " />
                  <polygon fill="#FFFFFF" points="263.8,159.7 292.7,200.7 257.5,195.7  " />
                  <polygon fill="#D0D0D0" points="363.9,48.7 365.3,76.6 334.7,65.5   " />
                  <polygon fill="#EAEAEA" points="365.3,76.6 338.6,137.5 334.7,65.5  " />
                  <polygon fill="#E9E9E9" points="365.3,76.6 389.8,134.8 338.6,137.5   " />
                  <polygon fill="#F3F3F3" points="389.8,134.8 372.6,202.5 338.6,137.5  " />
                  <polygon fill="#D6D6D6" points="365.3,76.6 402.5,85.7 389.8,134.8  " />
                  <polygon fill="#C2C2C2" points="402.5,85.7 409.9,136 389.8,134.8   " />
                  <polygon fill="#C8C8C8" points="409.9,136 398.6,205.7 389.8,134.8  " />
                  <polygon fill="#D4D4D4" points="389.8,134.8 398.6,205.7 372.6,202.5  " />
                  <polygon fill="#C3C3C3" points="363.9,48.7 402.5,85.7 365.3,76.6   " />
                  <polygon fill="#F1F1F1" points="201.3,135.6 263.8,159.7 206.4,173.5  " />
                  <polygon fill="#EEEEEE" points="206.4,173.5 263.8,159.7 214.9,206  " />
                  <polygon fill="#F4F4F4" points="263.8,159.7 257.5,195.7 214.9,206  " />
                  <polygon fill="#CECECE" points="181.1,179.4 214.9,206 213.1,239.4  " />
                  <polygon fill="#D0D0D0" points="201.3,135.6 206.4,173.5 181.1,179.4  " />
                  <polygon fill="#C8C8C8" points="181.1,179.4 214.9,206 206.4,173.5  " />
                  <polygon fill="#E9E9E9" points="272.3,95.6 201.3,135.6 193.2,97.2  " />
                  <path fill="none" d="M288.6,44.7" />
                  <polygon fill="#444444" points="294.2,321.4 310.3,323.1 305.3,317.9  " />
                  <polygon fill="#626262" points="274.2,323.5 284.2,321.4 274.1,348.4  " />
                  <polygon fill="#4D4D4D" points="284.2,321.4 274.1,348.4 293.7,352.3  " />
                  <polygon fill="#5B5B5B" points="284.2,321.4 293.7,352.3 294.2,321.4  " />
                  <path
                    fill="#454545"
                    d="M294.2,321.4c0.2,0.3-0.5,30.9-0.5,30.9l20.4,2.1L294.2,321.4z"
                  />
                  <polygon fill="#5F5F5F" points="294.2,321.4 310.3,323.1 314.1,354.4  " />
                  <polygon fill="#272727" points="310.3,323.1 314.1,354.4 333,336.4  " />
                  <polygon fill="#252525" points="345.2,363.1 314.1,354.4 333,336.4  " />
                  <polygon fill="#202020" points="347,313.6 345.2,363.1 333,336.4  " />
                  <polygon fill="#6E6E6E" points="241.3,358.3 274.1,348.4 296.9,367  " />
                  <polygon fill="#777777" points="274.1,348.4 293.7,352.3 296.9,367  " />
                  <polygon fill="#575757" points="293.7,352.3 296.9,367 314.1,354.4  " />
                  <polygon fill="#535353" points="296.9,367 314.1,354.4 345.2,363.1  " />
                  <polygon fill="#4D4D4D" points="296.9,367 345.2,363.1 331.4,376.6  " />
                  <path
                    fill="#CECECE"
                    d="M241.3,358.3c0.3,0.1,11.6,13.3,11.6,13.3l44-4.6L241.3,358.3z"
                  />
                  <polygon fill="#525252" points="241.3,358.3 244.9,383.8 252.9,371.6  " />
                  <polygon fill="#C0C0C0" points="252.9,371.6 252.7,387.9 279.6,379.2  " />
                  <polygon fill="#C0C0C0" points="252.9,371.6 296.9,367 279.6,379.2  " />
                  <path fill="#333333" d="M252.9,371.6c0.2,0.3-8,12.2-8,12.2l7.8,4.1L252.9,371.6z" />
                  <polygon fill="#2A2A2A" points="244.9,383.8 241.7,391.7 252.7,387.9  " />
                  <path
                    fill="#545454"
                    d="M296.9,367c-0.1,0-17.2,12.2-17.2,12.2l26.9-3.4L296.9,367z"
                  />
                  <polygon fill="#8E8E8E" points="296.9,367 306.5,375.7 331.4,376.6  " />
                  <path
                    fill="#414141"
                    d="M345.2,363.1c-0.1,0.2-13.8,13.5-13.8,13.5l10.4-0.4L345.2,363.1z"
                  />
                  <polygon fill="#B0B0B0" points="279.6,379.2 279.2,387 306.5,375.7  " />
                  <path
                    fill="#818181"
                    d="M279.6,379.2c-0.4,0.2-0.4,7.8-0.4,7.8l-26.5,0.9L279.6,379.2z"
                  />
                  <polygon fill="#272727" points="252.7,387.9 250.4,398.1 279.2,387  " />
                  <path
                    fill="#202020"
                    d="M241.7,391.7c0.7,0.3,8.7,6.3,8.7,6.3l2.3-10.2L241.7,391.7z"
                  />
                  <path
                    fill="#1A1A1A"
                    d="M250.4,398.1c-0.3-0.1-7.2,8.9-7.2,8.9l26.7-1.2L250.4,398.1z"
                  />
                  <path
                    fill="#4F4F4F"
                    d="M250.4,398.1c0.1,0.1,55-5.8,55-5.8l-26.2-5.3L250.4,398.1z"
                  />
                  <polygon fill="#222222" points="279.2,387 331.4,376.6 306.5,375.7  " />
                  <polygon fill="#383838" points="324.3,386 279.2,387 331.4,376.6  " />
                  <polygon fill="#4B4B4B" points="324.3,386 346.7,384.4 331.4,376.6  " />
                  <polygon fill="#3F3F3F" points="331.4,376.6 341.9,376.1 346.7,384.4  " />
                  <polygon fill="#383838" points="324.3,386 337,394.5 346.7,384.4  " />
                  <path
                    fill="#262626"
                    d="M305.4,392.3c0,0,18.7-6.1,18.9-6.3s-45.1,1-45.1,1L305.4,392.3z"
                  />
                  <path
                    fill="#1D1D1D"
                    d="M324.3,386c-0.4,0.1-18.8,5.9-18.9,6.3c-0.1,0.3,31.6,2.2,31.6,2.2L324.3,386z"
                  />
                  <polygon fill="#8B8B8B" points="250.4,398.1 269.9,405.8 305.4,392.3  " />
                  <path
                    fill="#BCBCBC"
                    d="M305.4,392.3l-35.5,13.5c0,0,54.4-3.3,55-3.3L305.4,392.3z"
                  />
                  <polygon fill="#3F3F3F" points="324.9,402.4 337,394.5 305.4,392.3  " />
                  <path
                    fill="#151515"
                    d="M337,394.5l-12.1,8c0,0,22,1,22.1,1.5C347.2,404.4,337,394.5,337,394.5z"
                  />
                  <polygon fill="#1E1E1E" points="324.9,402.4 334.5,412.2 347.1,403.9  " />
                  <path
                    fill="#383838"
                    d="M258,414.9c-0.1,0.2,66.9-12.5,66.9-12.5l9.6,9.8L258,414.9z"
                  />
                  <polygon fill="#4D4D4D" points="269.9,405.8 258,414.9 324.9,402.4  " />
                  <polygon fill="#202020" points="243.2,407 258,414.9 269.9,405.8  " />
                  <polygon fill="#1A1A1A" points="310.9,420.5 344.2,418.3 334.5,412.2  " />
                  <polygon fill="#808080" points="310.9,420.5 334.5,412.2 258,414.9  " />
                  <path
                    fill="#9B9B9B"
                    d="M258,414.9l8.6,8c0,0,44-2.4,44.3-2.4S258,414.9,258,414.9z"
                  />
                  <path
                    fill="#1E1E1E"
                    d="M258,414.9c-0.5,0.2-12.6,10.3-12.6,10.3l21.2-2.3L258,414.9z"
                  />
                  <path
                    fill="#1B1B1B"
                    d="M245.5,425.2c0.2,0.1,12.8,5.6,12.8,5.6l8.3-7.9L245.5,425.2z"
                  />
                  <path
                    fill="#080808"
                    d="M258.3,430.8c0-0.6,52.6-10.3,52.6-10.3l-44.3,2.4L258.3,430.8z"
                  />
                  <path
                    fill="#1F1F1F"
                    d="M344.2,418.3c0,0.1-33.2,2.3-33.2,2.3l19.8,8.4L344.2,418.3z"
                  />
                  <polygon fill="#2A2A2A" points="310.9,420.5 258.3,430.8 330.8,428.9  " />
                  <polygon fill="#C6C6C6" points="258.3,430.8 247.9,438.7 298.2,433.7  " />
                  <polygon fill="#5D5D5D" points="298.2,433.7 330.8,428.9 320.8,437.2  " />
                  <polygon fill="#878787" points="258.3,430.8 298.2,433.7 330.8,428.9  " />
                  <polygon fill="#3C3C3C" points="320.8,437.2 343.8,435.4 330.8,428.9  " />
                  <polygon fill="#252525" points="247.9,438.7 262.1,448.9 287.4,438.4  " />
                  <polygon fill="#353535" points="262.1,448.9 287.4,438.4 283.9,450.6  " />
                  <polygon fill="#3A3A3A" points="287.4,438.4 283.9,450.6 320.8,437.2  " />
                  <polygon fill="#353535" points="320.8,437.2 305.6,454.3 283.9,450.6  " />
                  <polygon fill="#303030" points="320.8,437.2 305.6,454.3 331.9,450.5  " />
                  <polygon fill="#262626" points="320.8,437.2 343.8,435.4 331.9,450.5  " />
                  <polygon fill="#2F2F2F" points="280.1,466.2 283.9,450.6 262.1,448.9  " />
                  <polygon fill="#393939" points="283.9,450.6 280.1,466.2 305.6,454.3  " />
                  <polygon fill="#252525" points="280.1,466.2 305.6,454.3 307.8,467.5  " />
                  <polygon fill="#262626" points="305.6,454.3 307.8,467.5 331.9,450.5  " />
                  <polygon fill="#9E9E9E" points="298.1,433.9 287.5,438.8 320.9,436.8  " />
                  <polygon fill="#B6B6B6" points="298.2,433.7 287.4,438.4 247.9,438.7  " />
                </g>
              </svg>
              <svg viewBox="0 0 600 500" id="cutout" class="tw-hidden">
                <g id="Layer_4">
                  <path
                    fill="#676767"
                    d="M0,0v500h600V0H0z M398.6,205.7l-36.5,47.6L347,313.6l-1.8,49.5l-3.4,13l4.9,8.3l-9.8,10l10,9.5l-12.5,8.3      l9.7,6l-13.4,10.7l13,6.4l-11.9,15.2l-24.1,16.9l-27.7-1.2l-18-17.3l-14.2-10.2l10.5-7.9c0,0-12.6-5.4-12.8-5.6      c0,0,12-10,12.4-10.2l0.1-0.1l-14.8-7.9c0,0,6.9-9,7.2-8.9c0,0-8-6.1-8.7-6.3l3.2-7.9l-0.1-0.5l-3.5-24.7l0-0.4l-0.1-35.1      l-8.2-47.2l-19.9-36.7l-32-59.9l12.2-82.3l22.5-38.9l44.8-24l46.8-4.4l56.5,18.8l38.6,37l7.4,50.3L398.6,205.7z"
                  />
                </g>
              </svg>
              <vue-typer
                v-if="$ksvuefp.fpLoaded"
                :repeat="0"
                text="Welcome to my personal webpage :)"
              ></vue-typer>
            </div>
            <div class="tw-text-white tw-w-full tw-text-center" v-if="index == 1">
              <h4
                class="content-title tw-cursor-pointer tw-text-2xl tw-text-shadow-lg tw-mb-10"
              >About me</h4>
              <vue-accodrion :items="aboueMeItems" />
            </div>
            <div class="tw-text-white tw-w-full tw-text-center" v-if="index == 2">
              <div class="tw-flex">
                <div class="tw-mx-3 tw-w-1/2">
                  <h4
                    class="content-title tw-cursor-pointer tw-text-2xl tw-text-shadow-lg tw-mb-10"
                  >Боловсрол</h4>
                  <light-timeline class="tw-text-left tw-mx-auto" :items="edu"></light-timeline>
                </div>
                <div class="tw-mx-3 tw-w-1/2">
                  <h4
                    class="content-title tw-cursor-pointer tw-text-2xl tw-text-shadow-lg tw-mb-10"
                  >Ажлын туршлага</h4>
                  <light-timeline class="tw-text-left tw-mx-auto" :items="exp"></light-timeline>
                </div>
              </div>
            </div>
            <div class="project-container tw-text-white tw-w-full" v-if="index == 3">
              <h4
                class="content-title tw-cursor-pointer tw-text-2xl tw-mx-auto tw-text-shadow-lg tw-mb-10"
              >Төсөл & Туршлага</h4>
              <perfect-scrollbar class="tw-max-h-full">
                <div class="flexbin flexbin-margin">
                  <div v-for="(project,project_index) in projects" :key="project_index">
                    <img
                      v-tooltip="project.title"
                      :src="'images/'+project.image"
                      :alt="project.title"
                      @click="goToProject(project.url)"
                    />
                  </div>
                </div>
              </perfect-scrollbar>
            </div>
            <div class="tw-text-white tw-w-full tw-text-center" v-if="index == 4">
              <h4
                class="content-title tw-cursor-pointer tw-text-2xl tw-text-shadow-lg tw-mb-10"
              >Чадвар & Технологи</h4>
              <ul class="skills tw-flex">
                <li
                  v-for="(skill,skill_index) in skills"
                  :key="skill_index"
                  @mouseover="skillShowByIndex = skill_index"
                  @mouseout="skillShowByIndex = null"
                >
                  <i :class="skill.icon" class="tw-pointer-events-none"></i>
                  {{skill.text}}
                  <span
                    v-if="skillShowByIndex == skill_index"
                    class="tw-ml-8 tw-pointer-events-none"
                    v-anime="{ easing: 'easeInOutQuad', innerHTML: `${90}%`, round: 1, duration: 500, delay: 200}"
                  ></span>
                </li>
              </ul>
              <h4
                class="content-title tw-cursor-pointer tw-text-2xl tw-text-shadow-lg tw-mb-10"
              >Бусад</h4>
              <ul class="skills tw-flex">
                <li
                  v-for="(item,item_index) in other"
                  :key="item_index"
                  @mouseover="otherShowByIndex = item_index"
                  @mouseout="otherShowByIndex = null"
                >
                  {{item.title}}
                  <span
                    v-if="otherShowByIndex == item_index"
                    class="tw-ml-8 tw-pointer-events-none"
                  >{{item.text}}</span>
                </li>
              </ul>
            </div>
            <div class="tw-text-white tw-w-full tw-text-center" v-if="index == 5">
              <h4
                class="content-title tw-cursor-pointer tw-text-2xl tw-text-shadow-lg tw-mb-10"
              >Холбогдох</h4>

              <ul class="tw-flex tw-mb-10">
                <li class="tw-w-1/2">
                  <b class="tw-mr-3">Утас:</b> +976 89859956
                </li>
                <li class="tw-w-1/2">
                  <b class="tw-mr-3">И-мэйл:</b> tododkhurelbaatar@gmail.com
                </li>
              </ul>

              <div class="social-icons tw-flex tw-flex-wrap">
                <div class="social-icons__icon tw-px-3 tw-mb-8 tw-cursor-pointer tw-w-1/5">
                  <a href="https://fb.com/khtodod" target="_blank">
                    <img class="tw-mx-auto" src="/images/facebook.png" alt />
                  </a>
                </div>
                <div class="social-icons__icon tw-px-3 tw-mb-8 tw-cursor-pointer tw-w-1/5">
                  <a href="https://twitter.com/khtodod" target="_blank">
                    <img class="tw-mx-auto" src="/images/twitter.png" alt />
                  </a>
                </div>
                <div class="social-icons__icon tw-px-3 tw-mb-8 tw-cursor-pointer tw-w-1/5">
                  <a href="https://instagram.com/tododkh" target="_blank">
                    <img class="tw-mx-auto" src="/images/instagram.png" alt />
                  </a>
                </div>
                <div class="social-icons__icon tw-px-3 tw-mb-8 tw-cursor-pointer tw-w-1/5">
                  <a href="https://www.youtube.com/channel/UCNsMA3z1wSz4NlejntCwM5Q" target="_blank">
                    <img class="tw-mx-auto" src="/images/youtube.png" alt />
                  </a>
                </div>
                <div class="social-icons__icon tw-px-3 tw-mb-8 tw-cursor-pointer tw-w-1/5">
                  <a target="_blank">
                    <img class="tw-mx-auto" src="/images/discord.png" alt />
                  </a>
                </div>
                <div class="social-icons__icon tw-px-3 tw-mb-8 tw-cursor-pointer tw-w-1/5">
                  <a target="_blank">
                    <img class="tw-mx-auto" src="/images/telegram.png" alt />
                  </a>
                </div>
                <div class="social-icons__icon tw-px-3 tw-mb-8 tw-cursor-pointer tw-w-1/5">
                  <a target="_blank">
                    <img class="tw-mx-auto" src="/images/skype.png" alt />
                  </a>
                </div>
                <div class="social-icons__icon tw-px-3 tw-mb-8 tw-cursor-pointer tw-w-1/5">
                  <a target="_blank">
                    <img class="tw-mx-auto" src="/images/reddit.png" alt />
                  </a>
                </div>
                <div class="social-icons__icon tw-px-3 tw-mb-8 tw-cursor-pointer tw-w-1/5">
                  <a target="_blank">
                    <img class="tw-mx-auto" src="/images/whatsapp.png" alt />
                  </a>
                </div>
                <div class="social-icons__icon tw-px-3 tw-mb-8 tw-cursor-pointer tw-w-1/5">
                  <a target="_blank">
                    <img class="tw-mx-auto" src="/images/viber.png" alt />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </ksvuefp-section>
      <v-icon
        @click.native="nextPage"
        v-anime="{ translateY: 10, direction: 'alternate', easing: 'linear', loop: true }"
        class="scroll-icon tw-inline tw-p-2 tw-border tw-rounded-full tw-text-white"
        :name="'chevrons-down'"
      ></v-icon>
    </ksvuefp>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Personal page"
    };
  },
  computed: {
    isLast: function() {
      if (this.sections == this.$ksvuefp.currentIndex) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    console.log(this.$ksvuefp.fpLoaded);
  },
  data() {
    return {
      skillShowByIndex: null,
      otherShowByIndex: null,
      currentProject: null,
      aboueMeItems: [
        {
          title: "Товч намтар",
          value: `
              <p>
                1997 оны 11 сарын 29нд Орхон аймаг төрсөн. Орхон аймгийн 6-р бага сургуульд бага ангиа төгсөн Орхон аймгийн 5-р сургуульд дунд ангиа төгссөн. Ахлах ангиа Эрдэм ахлах /хуучнаар 13-р сургууль/-д сурсан. 2014 оноос 2018 онд Их сургуулиа Мэдээлэл технологийн инженер мэргэжилээр төрөлөх хотдоо төгссөн.
              </p>
              <ul>
                <li class='tw-my-1'>
                  <b class='tw-mr-3'>Төрсөн он-сар-өдөр: </b> 1997-11-29
                </li>
                <li class='tw-my-1'>
                  <b class='tw-mr-3'>Жил: </b> Үхэр
                </li>
                <li class='tw-my-1'>
                  <b class='tw-mr-3'>Орд: </b> Нум
                </li>
                <li class='tw-my-1'>
                  <b class='tw-mr-3'>Ургийн овог: </b> Ар гөрөөчин
                </li>
                <li class='tw-my-1'>
                  <b class='tw-mr-3'>Үндэс угсаа: </b> Халх
                </li>
                <li class='tw-my-1'>
                  <b class='tw-mr-3'>Төрсөн газар: </b> Орхон аймаг, Эрдэнэт хот
                </li>
                <li class='tw-my-1'>
                  <b class='tw-mr-3'>Оршин суугаа газар: </b> Баянгол Дүүрэг, Улаанбаатар хот
                </li>
                <li class='tw-my-1'>
                  <b class='tw-mr-3'>Ахлах сургууль: </b> Орхон аймаг, Эрдэнэт хот, Эрдэм ахлах сургууль
                </li>
                <li class='tw-my-1'>
                  <b class='tw-mr-3'>Их сургууль: </b> Орхон аймаг, Эрдэнэт хот Ш.Отгонбилэг-ийн нэрэмжит Технологийн Их Сургууль 
                </li>
                <li class='tw-my-1'>
                  <b class='tw-mr-3'>Гэр бүл:</b> Эцэг, эх гурван дүү
                </li>
              </ul>
            `
        },
        {
          title: "Бусад",
          value: `
              <ul>
                <li class='tw-my-1'>
                  <b class='tw-mr-3'>Дуу/Хөгжим:</b> Alternative rock, Heavy rock (Nirvana,Metallica,Scorpions,Aerosmith, Guns N' Roses, SOAD). <a class='tw-text-white' target='_blank' href="https://www.youtube.com/playlist?list=PLKpyE4zZq8Ua1CfvD7daqNmWyn0wV0eNg">Youtube Playlist сонирхох :)</a>
                </li>
                <li class='tw-my-1'>
                  <b class='tw-mr-3'>Шашин шүтлэг: </b> Тодорхой шүтлэг байхгүй
                </li>
                <li class='tw-my-1'>
                  <b class='tw-mr-3'>Хобби: </b> Дуу хөгжим, Түүх, Технологи, Археологи, Кино, Монгол бөх, Домог
                </li>
                <li class='tw-my-1'>
                  <b class='tw-mr-3'>Дуртай кино: </b> Legends of the Fall, Forrest Gump, Blood diamond, Lord of the rings
                </li>
                <li class='tw-my-1'>
                  <b class='tw-mr-3'>Дуртай дуу: </b> Unforgiven I/II/III, Chop Suey, Fuel, Don't Cry, You and I, Bed of Roses
                </li>
                <li class='tw-my-1'>
                  <b class='tw-mr-3'>Ном: </b> Beast Men and Gods by Ferdynand Antoni Ossendowski
                </li>
                <li class='tw-my-1'>
                  <b class='tw-mr-3'>LGBT байр суурь: </b> Дэмждэггүй
                </li>
              </ul>
            `
        },
        {
          title: "Сошиал сүлжээнд...",
          value: `
            <ul>
              <li><a target="_blank" href="http://facebook.com/khtodod">facebook.com/khtodod</a></li>
              <li><a target="_blank" href="http://twitter.com/khtodod">twitter.com/khtodod</a></li>
              <li><a target="_blank" href="http://instagram.com/tododkh">instagram.com/tododkh</a></li>
            </ul>
          `
        }
      ],
      projects: [
        {
          title: "Tabsolution Co.,Ltd",
          image: "tab.png",
          url: "http://tabsolution.jp"
        },
        {
          title: "BaitoGaijin",
          image: "baito.png",
          url: "http://baitogaijin.com"
        },
        { title: "EnaBull", image: "enabull.png", url: "http://enabull.com" },
        // {
        //   title: "InCollex",
        //   image: "incollex.png",
        //   url: "http://incollex.com"
        // },
        {
          title: "Орхон аймаг Эрдэм ахлах сургууль",
          image: "school.png",
          url: "http://13school.edu.mn"
        },
        { title: "Ship2Mgl", image: "ship2.png", url: "http://ship2mgl.com" }
      ],
      other: [
        {
          title: "ReactJS",
          text: "Learning..."
        },
        {
          title: "PurgeCSS",
          text: "OK"
        },
        {
          title: "TailwindCSS",
          text: "OK"
        },
        {
          title: "NextJS",
          text: "Learning"
        },
        {
          title: "NuxtJS",
          text: "OK"
        }
      ],
      skills: [
        {
          icon: "devicon-html5-plain",
          percent: 90,
          text: "HTML"
        },
        {
          icon: "devicon-css3-plain",
          percent: 90,
          text: "CSS"
        },
        {
          icon: "devicon-bootstrap-plain",
          percent: 90,
          text: "Bootstrap"
        },
        {
          icon: "devicon-foundation-plain",
          percent: 90,
          text: "Foundation"
        },
        {
          icon: "devicon-sass-plain",
          percent: 90,
          text: "SASS"
        },
        {
          icon: "devicon-javascript-plain",
          percent: 90,
          text: "JS"
        },
        {
          icon: "devicon-jquery-plain",
          percent: 90,
          text: "jQuery"
        },
        {
          icon: "devicon-nodejs-plain",
          percent: 90,
          text: "NodeJS"
        },
        {
          icon: "devicon-nodewebkit-plain",
          percent: 90,
          text: "Webkit"
        },
        {
          icon: "devicon-vuejs-plain",
          percent: 90,
          text: "VueJS"
        },
        {
          icon: "devicon-express-original",
          percent: 90,
          text: "ExpressJS"
        },
        {
          icon: "devicon-php-plain",
          percent: 90,
          text: "PHP"
        },
        {
          icon: "devicon-wordpress-plain",
          percent: 90,
          text: "Wordpress"
        },
        {
          icon: "devicon-laravel-plain",
          percent: 90,
          text: "Laravel"
        },
        {
          icon: "devicon-codeigniter-plain",
          percent: 90,
          text: "Codeigniter"
        },
        {
          icon: "devicon-mysql-plain",
          percent: 90,
          text: "MySQL"
        },
        {
          icon: "devicon-linux-plain",
          percent: 90,
          text: "Linux"
        },
        {
          icon: "devicon-apache-plain",
          percent: 90,
          text: "Apache"
        },
        {
          icon: "devicon-nginx-plain",
          percent: 90,
          text: "NGINX"
        },
        {
          icon: "devicon-git-plain",
          percent: 90,
          text: "Git"
        },
        {
          icon: "devicon-ssh-plain",
          percent: 90,
          text: "SSH"
        },
        {
          icon: "devicon-photoshop-plain",
          percent: 90,
          text: "Photoshop"
        },
        {
          icon: "devicon-vim-plain",
          percent: 90,
          text: "Vim"
        }
      ],
      edu: [
        {
          tag: "2014-06-01",
          color: "#fff",
          content: "Орхон аймаг, Эрдэм ахлах сургууль"
        },
        {
          tag: "2018-06-01",
          color: "#fff",
          content:
            "Орхон аймаг, Отгонбилэг-ийн нэрэмжит Технологийн Их Сургууль"
        }
      ],
      exp: [
        {
          tag: "2016-06-01",
          color: "#fff",
          content: "Есүй Ковер ХХК - Програмист"
        },
        {
          tag: "2018-09-25",
          color: "#fff",
          content: "Tabsolution Co.,ltd - Програмист, Вэб хөгжүүлэгч"
        }
      ],
      sections: [1, 2, 3, 4, 5, 6],
      options: {
        // Your custom options here
        duration: 800,
        overlay: false
      }
    };
  },
  methods: {
    nextPage() {
      if (!this.isLast) {
        this.$ksvuefp.$emit("ksvuefp-nav-click", {
          nextIndex: this.$ksvuefp.currentIndex + 1
        });
      }
    },
    goToProject(url) {
      window.open(url, "_blank");
    }
  },
  components: {}
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Bad+Script&display=swap");
@import "../node_modules/ks-vue-fullpage/dist/ks-vue-fullpage.min.css";

body {
  margin: 0;
  font-family: "Ubuntu", sans-serif;
  webkit-transition: 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  -o-transition: 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
}
.container {
  background: #000;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .ksvuefp-section {
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      text-align: center;
      color: white;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
    opacity: 1;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  .custom-full-page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .content {
    width: 60rem;
    .content-title {
      position: relative;
      text-transform: uppercase;
      text-decoration: none;
      padding-bottom: 5px;
      display: inline-block;
      &:before,
      &:after {
        content: "";
        position: absolute;
        bottom: 2px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #fff;
      }
      &:before {
        opacity: 0;
        transform: translateY(-8px);
        transition: transform 0s cubic-bezier(0.175, 0.885, 0.32, 1.275),
          opacity 0s;
      }
      &:after {
        opacity: 0;
        transform: translateY(8px/2);
        transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
          opacity 0.2s;
      }
      &:hover,
      &:focus {
        &:before,
        &:after {
          opacity: 1;
          transform: translateY(0);
        }
        &:before {
          transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
            opacity 0.2s;
        }
        &:after {
          transition: transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
            opacity 0s 0.2s;
        }
      }
    }
  }
  /* SCSS */
  .vue-typer {
    transform: rotate(20deg);
    /* Styles for the vue-typer container
     e.g. font-family, font-size  */
    font-family: "Bad Script", cursive;
    font-size: 36px;
    .custom.char {
      /* Styles for each character
       e.g. color, background-color */
      color: #fff;
      &.typed {
        /* Styles specific to typed characters
         i.e. characters to the left of the caret */
      }
      &.selected {
        /* Styles specific to selected characters
         i.e. characters to the right of the caret while VueTyper's
              'eraseStyle' is set to a selection-based style */
      }
      &.erased {
        /* Styles specific to erased characters
         i.e. characters to the right of the caret while VueTyper's
              'eraseStyle' is set to a non-selection-based style */
      }
    }

    .custom.caret {
      /* Styles for the caret
       e.g. background-color, animation, display */

      &.pre-type {
        /* Styles for the caret when it is idle before typing
         i.e. before a string starts being typed, during 'preTypeDelay' */
      }
      &.pre-erase {
        /* Styles for the caret when it is idle before erasing
         i.e. before a string starts being erased, during 'preEraseDelay' */
      }
      &.idle {
        /* Styles for the caret when it is idle, but VueTyper has not yet completed typing
         i.e. when 'pre-type' or 'pre-erase' is set, but not 'complete' */
      }
      &.typing {
        /* Styles for the caret while VueTyper is typing
         i.e. when the caret is moving forwards */
      }
      &.selecting {
        /* Styles for the caret while VueTyper is selecting
         i.e. when the caret is moving backwards and 'eraseStyle' is
         set to a selection-based style */
      }
      &.erasing {
        /* Styles for the caret while VueTyper is erasing
         i.e. when the caret is moving backwards and 'eraseStyle' is
         set to a non-selection-based style */
      }
      &.complete {
        /* Styles for the idle caret when VueTyper has finished all typing/erasing */
      }
    }
  }

  .icon {
    width: 36px;
  }

  .scroll-icon {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 5em;
    cursor: pointer;
  }

  .line-container {
    color: #aaa;
    font-family: Ubuntu;
    .line-item {
      padding: 1.5em;
    }
  }
  .skills {
    width: 100%;
    flex-wrap: wrap;
    li {
      font-size: 18px;
      font-weight: 400;
      text-shadow: #000;
      width: 12em;
      margin-bottom: 1.5em;
      flex-direction: row;
      display: flex;
      margin-right: 1em;
      cursor: pointer;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
      padding: 0.5em 0.3em;
      &:hover {
        width: 13em;
        background: #fff;
        color: #000;
        outline-color: rgb(237, 237, 237);
      }
      i {
        margin-right: 0.8em;
        font-size: 28px;
      }
      span {
        margin-left: auto;
        margin-right: 0.5em;
        font-weight: 700;
      }
    }
  }
  .project-container {
    max-height: 40em;
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
  }
  .flexbin {
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    margin: -2.5px;
  }
  .flexbin:after {
    content: "";
    flex-grow: 999999999;
    min-width: 300px;
    height: 0;
  }
  .flexbin > * {
    position: relative;
    display: block;
    height: 300px;
    margin: 0.5em;
    flex-grow: 1;
  }
  .flexbin > * > img {
    height: 300px;
    object-fit: cover;
    object-position: top;
    max-width: 100%;
    min-width: 100%;
    vertical-align: bottom;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: filter 1s;
    &:hover {
      -webkit-filter: grayscale(0%);
      filter: grayscale(0%);
      cursor: pointer;
    }
  }
  .flexbin.flexbin-margin {
    // margin: 2.5px;
  }
  @media (max-width: 980px) {
    .flexbin {
      display: flex;
      overflow: hidden;
      flex-wrap: wrap;
      margin: -2.5px;
    }
    .flexbin:after {
      content: "";
      flex-grow: 999999999;
      min-width: 150px;
      height: 0;
    }
    .flexbin > * {
      position: relative;
      display: block;
      height: 150px;
      margin: 2.5px;
      flex-grow: 1;
    }
    .flexbin > * > img {
      height: 150px;
      object-fit: cover;
      max-width: 100%;
      min-width: 100%;
      vertical-align: bottom;
    }
    .flexbin.flexbin-margin {
      margin: 2.5px;
    }
  }
  @media (max-width: 400px) {
    .flexbin {
      display: flex;
      overflow: hidden;
      flex-wrap: wrap;
      margin: -2.5px;
    }
    .flexbin:after {
      content: "";
      flex-grow: 999999999;
      min-width: 100px;
      height: 0;
    }
    .flexbin > * {
      position: relative;
      display: block;
      height: 100px;
      margin: 2.5px;
      flex-grow: 1;
    }
    .flexbin > * > img {
      height: 100px;
      object-fit: cover;
      max-width: 100%;
      min-width: 100%;
      vertical-align: bottom;
    }
    .flexbin.flexbin-margin {
      margin: 2.5px;
    }
  }

  .social-icons {
    .social-icons__icon {
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: scale(1.2);
      }
    }
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  canvas {
    display: block;
    vertical-align: bottom;
    // position: absolute;
    // top: 0px;
    z-index: 29;
    width: 300px;
    height: 250px;
  }

  svg#lightbulb,
  svg#cutout {
    width: 300px;
    height: 250px;
    z-index: 200;
    // position: absolute;
    // top: 0px;
  }
  svg#lightbulb {
    z-index: 200;
    mix-blend-mode: multiply;
    margin-left: auto;
    margin-right: auto;
  }
  svg#cutout {
    z-index: 300;
    pointer-events: none;
    path {
      fill: #000;
    }
  }
  #Layer_3 {
    polygon {
      position: relative;
      opacity: 1;
      transform-origin: 50% 50%;
      transition: 250ms;
      &:hover {
        // transform: scale(1.5);
        // z-index: 1000;
        fill: #000;
      }
    }
  }

  .accordion {
    border: none;
    .accordion__item {
      border: none;
      .accordion__title {
        color: #fff;
        padding: 15px 0;
        .accordion__toggle-button {
          &::before {
            background: #fff;
          }
          &::after {
            background: #fff;
          }
        }
      }
      .accordion__value {
        padding: 0 0 0 5px;
        color: #aaa;
        font-size: 12px;
      }
    }
  }
}
</style>
