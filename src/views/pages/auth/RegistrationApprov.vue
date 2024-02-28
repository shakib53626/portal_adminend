<script setup>

</script>

<template>
    <div class="reset-password-page-area">
        <div class="row">
            <div class="col-md-12">
                <div class="page-title">
                    <h4>Registration Request Llist</h4>
                    <hr>
                </div>
                <div class="content-body">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="card text-center">
                                <img src="@/assets/images/logo/light-favicon.png" alt="">
                                <h5>Shakibul Islam</h5>
                                <div>
                                    <select id="" class="form-control mb-2 mt-2">
                                        <option value="">Select Designation</option>
                                    </select>
                                    <select id="" class="form-control">
                                        <option value="">Select Role</option>
                                    </select>
                                </div>
                                <div class="approval-action d-flex justify-content-between">
                                    <button class="btn-remove">Remove</button>
                                    <button class="btn-approve">Approve</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.content-body .card {
    width: 100%;
    padding-top: 10px;
}

.content-body .card img {
    height: 80px;
    width: 80px;
    border-radius: 100%;
    border: 4px solid #1C5990;
    margin: auto;
}

.content-body .card h5 {
    font-weight: 700;
    color: #1C5990;
    margin-bottom: 0;
}

.reset-password-page-area {
    padding: 20px;
}

.page-title h4 {
    margin-bottom: 0;
    font-weight: 700;
    color: #1C5990;
}

.page-title hr {
    height: 3px;
    color: #1C5990;
}

.approval-action {
    padding-top: 10px;
}

.approval-action button {
    padding: 3px 10px;
    border: none;
    border-radius: 5px;
    color: #fff;
}

.btn-remove {
    background-color: #f14b4b;
    box-shadow: 0 7px 14px 0 rgba(241, 75, 75, 0.5);
}

.btn-remove:hover {
    box-shadow: none;
}

.btn-approve {
    background-color: #1eca7b;
    box-shadow: 0 7px 14px 0 rgba(30, 202, 123, 0.5);
}

.btn-approve:hover {
    box-shadow: none;
}</style>