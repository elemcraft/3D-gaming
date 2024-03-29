
$(document).ready(function () {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    var axes = new THREE.AxesHelper(300)
    scene.add(axes)
    camera.position.z = 5;

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
   


    var animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        controls.update();
    };

    animate();

    window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    /*let renderer, scene, camera
    let cameraControl, stats

    // 苦力怕物件
    class Creeper {
        constructor() {
            // 宣告頭、身體、腳幾何體大小
            const headGeo = new THREE.BoxGeometry(4, 4, 4)
            const bodyGeo = new THREE.BoxGeometry(4, 8, 2)
            const footGeo = new THREE.BoxGeometry(2, 3, 2)

            // 馮氏材質設為綠色
            const creeperMat = new THREE.MeshPhongMaterial({ color: 0x00ff00 })

            // 頭
            this.head = new THREE.Mesh(headGeo, creeperMat)
            this.head.position.set(0, 6, 0)

            // 身體
            this.body = new THREE.Mesh(bodyGeo, creeperMat)
            this.body.position.set(0, 0, 0)

            // 四隻腳
            this.foot1 = new THREE.Mesh(footGeo, creeperMat)
            this.foot1.position.set(-1.1, -5.5, 2)
            this.foot2 = this.foot1.clone() // 剩下三隻腳都複製第一隻的 Mesh
            this.foot2.position.set(-1.1, -5.5, -2)
            this.foot3 = this.foot1.clone()
            this.foot3.position.set(1.1, -5.5, 2)
            this.foot4 = this.foot1.clone()
            this.foot4.position.set(1.1, -5.5, -2)

            // 將四隻腳組合為一個 group
            this.feet = new THREE.Group()
            this.feet.add(this.foot1)
            this.feet.add(this.foot2)
            this.feet.add(this.foot3)
            this.feet.add(this.foot4)

            // 將頭、身體、腳組合為一個 group
            this.creeper = new THREE.Group()
            this.creeper.add(this.head)
            this.creeper.add(this.body)
            this.creeper.add(this.feet)
        }
    }

    // 生成苦力怕並加到場景
    function createCreeper() {
        const creeperObj = new Creeper()
        scene.add(creeperObj.creeper)
    }

    //性能監測
    /*function initStats() {
        const stats = new Stats()
        stats.setMode(0)    //stats.setMode(0)，這裡如果設成 0 ，會顯示「畫面刷新頻率（FPS）」，設成 1 的話，就會轉換為「畫面渲染時間」。
        document.getElementById('stats').appendChild(stats.domElement)
        return stats
    }*/
    /*
    // 畫面初始化
    function init() {
        scene = new THREE.Scene()

        // 相機設定與 OrbitControls
        camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        camera.position.set(30, 30, 30)
        camera.lookAt(scene.position)

        // 建立 OrbitControls
        cameraControl = new THREE.OrbitControls(camera, renderer.domElement)
        cameraControl.enableDamping = true // 啟用阻尼效果
        cameraControl.dampingFactor = 0.25 // 阻尼系數
        // cameraControl.autoRotate = true // 啟用自動旋轉

        // 三軸座標輔助
        let axes = new THREE.AxesHelper(20)
        scene.add(axes)

        // 渲染器設定
        renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)

        // 簡單的地板
        const planeGeometry = new THREE.PlaneGeometry(60, 60)
        const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
        let plane = new THREE.Mesh(planeGeometry, planeMaterial)
        plane.rotation.x = -0.5 * Math.PI
        plane.position.set(0, -7, 0)
        scene.add(plane)

        // 產生苦力怕物件並加到場景
        createCreeper()

        // 簡單的 spotlight 照亮物體
        let spotLight = new THREE.SpotLight(0xffffff)
        spotLight.position.set(-10, 40, 30)
        scene.add(spotLight)
        // let spotHelper = new THREE.SpotLightHelper(spotLight)
        // scene.add(spotHelper)

        // 將渲染出來的畫面放到網頁上的 DOM
        document.body.appendChild(renderer.domElement)
    }

    function render() {
        //stats.update()
        cameraControl.update()
        requestAnimationFrame(render)
        renderer.render(scene, camera)
    }

    window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    })

    init()
    render()*/
})