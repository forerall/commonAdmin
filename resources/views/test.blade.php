@extends('admin.base')

@section('content')
    <a href="" onclick="test_js()">123</a>
   <div > <img width="100" height="100" src="/images/1.png" alt="" onclick="showImg(this)"> 213</div>
@endsection

@section('script')
    <script>
        layui.use(['index', 'console']);

    </script>

@endsection