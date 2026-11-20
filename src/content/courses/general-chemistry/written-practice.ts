import type { SemiEssayExercise } from '../../../domain/semi-essay';

export default [{
  id: 'gc-atomic-structure-written',
  lessonId: 'gc-atomic-structure',
  kind: 'semi-essay',
  title: 'Trình bày lập luận về hai đồng vị uranium',
  prompt: 'Bài giảng (trang 13) minh họa hai nguyên tử $^{235}_{92}\\mathrm{U}$ và $^{238}_{92}\\mathrm{U}$.\n\na) Xác định số proton, số neutron và số electron của mỗi nguyên tử.\n\nb) Hai nguyên tử này có quan hệ gì với nhau?',
  given: [],
  theoryAnchors: [],
  steps: [{
    id: 'gc-atomic-structure-written-particles', kind: 'written-reasoning',
    title: 'Giải thích cách đếm các hạt',
    prompt: 'Nêu ý nghĩa của A, Z và điều kiện trung hòa. Từ đó trình bày số proton, neutron, electron của từng nguyên tử.',
    theoryAnchorIds: [],
    hints: ['Số proton được xác định bởi số hiệu nguyên tử Z.', 'Số khối A gồm proton và neutron; đề cho nguyên tử trung hòa.'],
    modelAnswer: 'Với $^{A}_{Z}\\mathrm{X}$, số proton là $Z$, số neutron là $A-Z$; nguyên tử trung hòa có số electron bằng $Z$. Vì vậy uranium-235 có 92 proton, 143 neutron, 92 electron; uranium-238 có 92 proton, 146 neutron, 92 electron.',
    rubric: [{ id: 'meaning', prompt: 'Tôi đã giải thích ý nghĩa của A, Z và dùng đúng điều kiện trung hòa.' }, { id: 'counts', prompt: 'Tôi đã trình bày đủ ba loại hạt của cả hai nguyên tử và cách tính neutron.' }],
    summaryTemplate: 'Uranium-235: 92p, 143n, 92e. Uranium-238: 92p, 146n, 92e; nguyên tử đều trung hòa.',
  }, {
    id: 'gc-atomic-structure-written-isotopes', kind: 'written-reasoning',
    title: 'Kết luận từ phép so sánh',
    prompt: 'So sánh số proton và số neutron của hai nguyên tử, rồi viết kết luận kèm lý do.',
    theoryAnchorIds: [],
    hint: 'Tách tiêu chí xác định nguyên tố khỏi sự khác nhau về số khối.',
    modelAnswer: 'Hai nguyên tử có cùng số proton $Z=92$ nên cùng là uranium, nhưng có số neutron khác nhau (143 và 146). Vì vậy chúng là hai đồng vị của cùng một nguyên tố.',
    rubric: [{ id: 'same-z', prompt: 'Tôi đã liên hệ cùng số proton với cùng nguyên tố.' }, { id: 'different-neutrons', prompt: 'Tôi đã dùng sự khác nhau về neutron để giải thích kết luận đồng vị.' }],
    summaryTemplate: 'Cùng số proton nhưng khác số neutron: hai đồng vị của uranium.',
  }],
  provenance: {
    repository: 'https://github.com/HanitaV/Chemistry', revision: 'ad043333d24f67da5d11611678754397f4595e49',
    path: 'src/content/courses/general-chemistry/chapters/chapter-1/exercises/atomic-structure.json',
    rights: 'approved', attribution: 'Chuyển câu hỏi đồng vị uranium đã có trong bài giảng thành các bước tự viết và tự đối chiếu.',
  },
}] as const satisfies readonly SemiEssayExercise[];
