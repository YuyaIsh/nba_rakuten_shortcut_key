window.onload = function() {
    window.onkeydown = function(e) {
        if (e.isComposing || e.keyCode === 229) {
            return;
        }
        // space
        if (e.keyCode==32){
                const buttons = document.querySelectorAll(".playButton");

                // NodeListを配列に変換
                const buttonsArray = [].map.call(buttons, (ele) => ele);

                // 表示されている要素のみ抽出
                const button = buttonsArray.filter(
                    (ele) => ele.style.display !== "none"
                );

                button[0].querySelectorAll(".playButton-background")[0].click();

                return false;
        }

        // >(,)で30秒進む
        if (e.keyCode==188){
            document.querySelectorAll(".icons-rew-30s")[0].click();
        }
        // <(.)で30秒戻す
        if (e.keyCode==190){
            document.querySelectorAll(".icons-ff-30s")[0].click();
        }

        // →で10秒進む
        if (e.keyCode==39){
            document.querySelectorAll(".icons-ff-10s")[0].click();
        }
        // ←で10秒戻す
        if (e.keyCode==37){
            document.querySelectorAll(".icons-rew-10s")[0].click();
        }

        // 1で1Q
        if (e.keyCode==49|e.keyCode==97){
            document.querySelectorAll(".quarterSkip-list-item")[0].click();
        }
        // 2で2Q
        if (e.keyCode==50|e.keyCode==98){
            document.querySelectorAll(".quarterSkip-list-item")[1].click();
        }
        // 3で3Q
        if (e.keyCode==51|e.keyCode==99){
            document.querySelectorAll(".quarterSkip-list-item")[2].click();
        }
        // 4で4Q
        if (e.keyCode==52|e.keyCode==100){
            document.querySelectorAll(".quarterSkip-list-item")[3].click();
        }

        // fでフルスクリーン
        if (e.keyCode==70){
            document.querySelectorAll(".icons-screen-full")[0].click();
        }

        // mでミュート切り替え
        if (e.keyCode==77){
                document.querySelectorAll(".volume-icon")[0].click();
        }
    };
};
